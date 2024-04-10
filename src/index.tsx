import { FontLoadingPage } from "app/components/fontLoading";
import { Themes } from "app/types";
import FontFaceObserver from "fontfaceobserver";
import i18n from "locales/i18n";
import { useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";
import { Provider as ReduxProvider } from "react-redux";
import { configureAppStore } from "store/configureStore";
import { LocalStorageKeys, storage } from "store/storage";
import GlobalStyle from "styles/globalStyles";
import App from "./app/App";
interface Props {
  Component: typeof App;
}

const getThemeBeforeRedux = () => {
  const savedTheme = storage.read(LocalStorageKeys.THEME);
  const app = document.querySelector("body");
  if (app) {
    app.classList.add(savedTheme);
  }
  if (savedTheme) {
  } else {
    storage.write(LocalStorageKeys.THEME, Themes.LIGHT);
  }
};
const store = configureAppStore({});
const ConnectedApp = ({ Component }: Props) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const openSansObserver = new FontFaceObserver("Inter", {});
  openSansObserver.load().then(() => {
    setIsFontLoaded(true);
    document.body.classList.add("fontLoaded");
  });

  useLayoutEffect(() => {
    getThemeBeforeRedux();
    if (document.body.classList.contains("fontLoaded")) {
      setIsFontLoaded(true);
    } else {
      setIsFontLoaded(false);
    }
  }, [isFontLoaded]);
  return (
    <ReduxProvider store={store}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyle />
        <HelmetProvider>
          {isFontLoaded ? <Component /> : <FontLoadingPage />}
        </HelmetProvider>
      </I18nextProvider>
    </ReduxProvider>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<ConnectedApp Component={App} />);
