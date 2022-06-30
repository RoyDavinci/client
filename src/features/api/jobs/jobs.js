import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    jobs: [],
    status: "idle",
};

export const getJobs = createAsyncThunk("/fetch/jobs", async () => {
    const token = localStorage.getItem("admin");
    const { data } = await axios.get("http://localhost:8100/api/v1/jobs", { headers: { Authorization: `Bearer ${token}` } });
    return data;
});

export const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getJobs.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(getJobs.fulfilled, (state, action) => {
                state.status = "succeeded";
                // Add any fetched posts to the array
                state.jobs.push(action.payload);
            })
            .addCase(getJobs.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { changeState } = jobSlice.actions;

export const defaultState = (state) => state.jobs.jobs;

export default jobSlice.reducer;
