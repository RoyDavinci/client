import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggle: false,
    status: "idle",
};

export const stateSlice = createSlice({
    name: "toggler",
    initialState,
    reducers: {
        changeState: (state) => {
            return {
                ...state,
                toggle: !state.toggle,
            };
        },
    },
});

export const { changeState } = stateSlice.actions;

export const defaultState = (state) => state.toggler.toggle;

export default stateSlice.reducer;
