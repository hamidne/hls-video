require("dotenv").config();

export default process.env.NODE_ENV === "production"
	? { baseURL: process.env.API_URL }
	: { proxy: true };
