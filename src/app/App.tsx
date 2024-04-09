import { History } from "history";
import { FC, ReactElement, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Router, Routes } from "react-router-dom";
import { globalActions, useglobalSlice } from "store/slice";
import history from "../router/history";
import { Header } from "./components/common/header";
import { Home } from "./containers/Home";
import { NotFoundPage } from "./containers/NotFound";
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
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(globalActions.getAndSetTheme());
  }, []);
  return (
    <>
      <Header></Header>
      <CustomRouter history={history}>
        <Routes>
          <Route path={AppPages.RootPage} element={<Home />} />
          <Route path={AppPages.NotFoundPage} element={<NotFoundPage />} />
        </Routes>
      </CustomRouter>
    </>
  );
}

export default App;
