import { createSlice } from '@reduxjs/toolkit';
import { jobs } from '../../constants/jobs';

const initialState = {
    alljobs: jobs,
    jobs,
    appliedJobs: [],
    rejectedJobs: []
}

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        apply: (state, action) => {
            let { appliedJobs, jobs } = action.payload
            return { ...state, appliedJobs, jobs }
        },
        reject: (state, action) => {
            let { rejectedJobs, jobs } = action.payload
            return { ...state, rejectedJobs, jobs }
        }
    },
});

export const { apply, reject } = jobsSlice.actions;
export default jobsSlice.reducer;