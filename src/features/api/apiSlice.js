import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    jobs: [],
    status: "idle",
};

export const stateSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {},
});

export const { changeState } = stateSlice.actions;

export const defaultState = (state) => state.toggler.toggle;

export default stateSlice.reducer;
