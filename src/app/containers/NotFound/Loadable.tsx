/**
 *
 * Asynchronously loads the component for NotFound
 *
 */
import { PageLoading } from "app/components/common/pageLoading";
import { lazyLoad } from "common/loadable";

export const NotFound = lazyLoad(
  () => import("./index"),
  (module) => module.NotFoundPage,
  { fallback: <PageLoading /> }
);
