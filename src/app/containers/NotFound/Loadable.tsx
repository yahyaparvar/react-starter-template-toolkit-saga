/**
 *
 * Asynchronously loads the component for NotFound
 *
 */
import React from "react";
import { lazyLoad } from "common/loadable";
import { PageLoading } from "app/components/common/pageLoading";

export const NotFound = lazyLoad(
  () => import("./index"),
  (module) => module.NotFoundPage,
  { fallback: <PageLoading /> }
);
