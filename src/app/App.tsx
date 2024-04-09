import { History } from "history";
import { FC, ReactElement, useLayoutEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import history from "../router/history";
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
  return (
    <CustomRouter history={history}>
      <Routes>
        <Route path={AppPages.RootPage} element={<Home />} />
        <Route path={AppPages.NotFoundPage} element={<NotFoundPage />} />
      </Routes>
    </CustomRouter>
  );
}

export default App;
