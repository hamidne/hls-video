require("dotenv").config();

export default {
	"/api/": {
		target: process.env.API_URL,
		secure: false
	},
	"/media/": {
		target: process.env.API_URL,
		secure: false
	},
	"/junk/": {
		target: process.env.API_URL,
		secure: false
	}
};
