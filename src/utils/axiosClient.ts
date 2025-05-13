import axios from "axios";
export const axiosClient = axios.create({
	baseURL: "https://dummy-api-jtg6bessta-ey.a.run.app", // can get this from .env file in a real life project
});
