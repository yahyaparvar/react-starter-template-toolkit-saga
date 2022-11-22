import React, { useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import FontFaceObserver from "fontfaceobserver";
import { Provider as ReduxProvider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { configureAppStore } from "store/configureStore";
import GlobalStyle from "styles/globalStyles";
interface Props {
  Component: typeof App;
}
const store = configureAppStore({});
const ConnectedApp = ({ Component }: Props) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const openSansObserver = new FontFaceObserver("Inter", {});
  openSansObserver.load().then(() => {
    setIsFontLoaded(true);
    document.body.classList.add("fontLoaded");
  });

  useLayoutEffect(() => {
    if (document.body.classList.contains("fontLoaded")) {
      setIsFontLoaded(true);
    } else {
      setIsFontLoaded(false);
    }
  }, [isFontLoaded]);
  return (
    <ReduxProvider store={store}>
      <GlobalStyle />
      <HelmetProvider>
        {isFontLoaded ? (
          <Component />
        ) : (
          <div
            style={{
              backgroundColor: "#18181f",
              width: " 100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
        )}
      </HelmetProvider>
    </ReduxProvider>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<ConnectedApp Component={App} />);
