import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APIResponseType, CategoryType, InitialState, QuestionType } from "../utils/types";
import { getCategories, getQuestions } from "./actions";

export const initialState: InitialState = {
	error: false,
	success: false,
	loadingCategories: false,
	loadingQuestions: false,
	message: "",
	isAuthenticated: undefined,
	categories: [],
	questions: [],
};

export const reducer = createSlice({
	name: "global",
	initialState,
	reducers: {
		clearStates: (state) => {
			state.success = false;
			state.error = false;
			state.message = "";
		},
		signOut: (state) => {
			state.isAuthenticated = false;
		},
		signIn: (state, action: PayloadAction<boolean>) => {
			state.isAuthenticated = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getQuestions.pending, (state) => {
				state.loadingQuestions = true;
			})
			.addCase(getQuestions.fulfilled, (state, action: PayloadAction<APIResponseType<Array<QuestionType>>>) => {
				if (action.payload.success) {
					state.questions = action.payload.data;
				} else {
					state.error = true;
					state.message = action.payload.message;
				}
				state.loadingQuestions = false;
			})
			.addCase(getCategories.pending, (state) => {
				state.loadingCategories = true;
			})
			.addCase(getCategories.fulfilled, (state, action: PayloadAction<APIResponseType<Array<CategoryType>>>) => {
				if (action.payload.success) {
					state.categories = action.payload.data;
				} else {
					state.error = true;
					state.message = action.payload.message;
				}
				state.loadingCategories = false;
			});
	},
});

export const { signIn, signOut, clearStates } = reducer.actions;

export default reducer.reducer;
