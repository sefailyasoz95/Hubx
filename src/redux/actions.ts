import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../utils/axiosClient";

export const getQuestions = createAsyncThunk("getQuestions", async () => {
	try {
		const response = await axiosClient.get("/getQuestions");
		console.log("getQuestions response: ", response.data);

		return {
			data: [],
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
		console.log("getCategories response: ", response.data);

		return {
			data: [],
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
