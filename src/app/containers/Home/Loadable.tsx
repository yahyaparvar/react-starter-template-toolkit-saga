/**
*
* Asynchronously loads the component for Home
*
*/
import React from 'react';
import { lazyLoad } from 'common/loadable';
import { PageLoading } from 'app/components/common/pageLoading';

export const Home = lazyLoad(() => import('./index'), module => module.Home, {fallback: <PageLoading />,},);