import { AboutMeState } from 'app/containers/AboutMe/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { HomeState } from "app/containers/Home/types";
import { GlobalState } from "store/slice";

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  global?: GlobalState;
  home?: HomeState;
  aboutMe?: AboutMeState;
// [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
