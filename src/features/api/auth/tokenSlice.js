import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    status: "idle",
    error: "",
    token: "",
};

export const adminSignIn = createAsyncThunk("/admin/login", async ({ email, password }) => {
    const { data } = await axios.post("http://localhost:8100/api/v1/login", { email, password });
    return data;
});

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(adminSignIn.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(adminSignIn.fulfilled, (state, action) => {
                state.status = "succeeded";
                // Add any fetched posts to the array
                state.data.push(action.payload);
                state.token = state.data[0].token;
                localStorage.setItem("admin", state.token);
            })
            .addCase(adminSignIn.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { changeState } = loginSlice.actions;

export const defaultState = (state) => state.login.toggle;

export default loginSlice.reducer;
