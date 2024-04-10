/* eslint-disable react-hooks/exhaustive-deps */
import { History } from "history";
import { FC, ReactElement, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Route, Router, Routes } from "react-router-dom";
import { globalActions, useglobalSlice } from "store/slice";
import styled from "styled-components";
import { COLUMN_ALIGN_START__JUSTIFY_START } from "styles/globalStyles";
import { Header } from "./components/header";
import { Home } from "./containers/Home";
import { NotFoundPage } from "./containers/NotFound";
import history from "./router/history";
import { AppPages } from "./types";
interface CustomRouterProps {
  history: History;
  children?: ReactElement;
}

const CustomRouter: FC<CustomRouterProps> = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

function App() {
  useglobalSlice();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(globalActions.getAndSetTheme());
  }, []);
  return (
    <Wrapper
      onClick={() => {
        i18n.changeLanguage("de");
      }}
    >
      {t("greeting")}
      <Header />
      <CustomRouter history={history}>
        <Routes>
          <Route path={AppPages.RootPage} element={<Home />} />
          <Route path={AppPages.NotFoundPage} element={<NotFoundPage />} />
        </Routes>
      </CustomRouter>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  ${COLUMN_ALIGN_START__JUSTIFY_START}
`;
export default App;
