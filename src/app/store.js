import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "../features/state/stateSlice";
import loginSlice from "../features/api/auth/tokenSlice";
import jobSlice from "../features/api/jobs/jobs";
import { contactSlice } from "../features/api/service/contact";

export const store = configureStore({
	reducer: {
		toggler: stateReducer,
		login: loginSlice,
		jobs: jobSlice,
		contact: contactSlice,
	},
});
