import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	toggle: true,
};

const Global = createSlice({
	name: "second",
	initialState,
	reducers: {
		createUser: (state, { payload }) => {
			state.user = payload;
		},
		logOut: (state) => {
			state.user = null;
		},

		onToggleTrue: (state) => {
			state.toggle = true;
		},

		onToggleFalse: (state) => {
			state.toggle = false;
		},
	},
});

export const { createUser, logOut, onToggleFalse, onToggleTrue } =
	Global.actions;

export default Global.reducer;
