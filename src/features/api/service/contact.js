import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	data: [],
	status: "idle",
};

export const submitContact = createAsyncThunk(
	"/contact",
	async ({ fullName, email, phone, message, inquiry }) => {
		const { data } = axios.post("http://localhost:8100/api/v1/email", {
			fullName,
			email,
			phone,
			message,
			inquiry,
		});
		return data;
	}
);

export const contactSlice = createSlice({
	name: "contact",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(submitContact.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(submitContact.fulfilled, (state, action) => {
				state.status = "succeeded";
				// Add any fetched posts to the array
				state.data.push(action.payload);
			})
			.addCase(submitContact.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const defaultState = (state) => state.contact.status;

export default contactSlice.reducer;
