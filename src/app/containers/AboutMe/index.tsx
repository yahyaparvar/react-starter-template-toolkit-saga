/**
*
* AboutMe
*
*/

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
 

import { useInjectReducer, useInjectSaga } from 'store/redux-injectors';
import { AboutMeReducer, sliceKey } from './slice';
import { selectAboutMe } from './selectors';
import { aboutMeSaga } from './saga';

interface Props {}


export function AboutMe(props: Props) {
useInjectReducer({ key: sliceKey, reducer: AboutMeReducer });
  useInjectSaga({ key: sliceKey, saga: aboutMeSaga });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const aboutMe = useSelector(selectAboutMe);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dispatch = useDispatch();


return (
<>
  <Helmet>
    <title>AboutMe</title>
    <meta name="description" content="Description of AboutMe" />
  </Helmet>
     <div>
  </div>
</>
);

};
