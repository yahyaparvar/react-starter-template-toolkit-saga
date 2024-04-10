/**
*
* Asynchronously loads the component for AboutMe
*
*/
import React from 'react';
import { lazyLoad } from 'common/loadable';
import { PageLoading } from 'app/components/common/pageLoading';

export const AboutMe = lazyLoad(() => import('./index'), module => module.AboutMe, {fallback: <PageLoading />,},);