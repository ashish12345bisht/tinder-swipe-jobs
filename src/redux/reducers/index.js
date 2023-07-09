import { combineReducers } from '@reduxjs/toolkit';
import jobsSlice from './jobs';
// import other reducers as needed

const rootReducer = combineReducers({
    jobsSlice
    // add other reducers here
});

export default rootReducer;