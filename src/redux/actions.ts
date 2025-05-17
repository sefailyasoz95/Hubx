import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../utils/axiosClient";

export const getQuestions = createAsyncThunk("getQuestions", async () => {
	try {
		const response = await axiosClient.get("/getQuestions");

		return {
			data: response.data,
			message: "",
			success: true,
		};
	} catch (error) {
		return {
			data: [],
			message: "",
			success: true,
		};
	}
});
export const getCategories = createAsyncThunk("getCategories", async () => {
	try {
		const response = await axiosClient.get("/getCategories");

		return {
			data: response.data.data,
			message: "",
			success: true,
		};
	} catch (error) {
		return {
			data: [],
			message: "",
			success: true,
		};
	}
});
