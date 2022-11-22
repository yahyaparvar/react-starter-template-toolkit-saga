/**
 *
 * Home
 *
 */

import React from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";

import { useInjectReducer, useInjectSaga } from "store/redux-injectors";
import { homeReducer, sliceKey } from "./slice";
import { selectHome } from "./selectors";
import { homeSaga } from "./saga";

interface Props {}

export function Home(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: homeReducer });
  useInjectSaga({ key: sliceKey, saga: homeSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const home = useSelector(selectHome);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <div>Home</div>
    </>
  );
}
