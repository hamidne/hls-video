export default {
	cookie: {
		options: {
			secure: true
		}
	},
	redirect: {
		home: '/',
		logout: '/',
		login: '/auth',
		callback: '/login'
	},
	strategies: {
		local: {
			endpoints: {
				user: false,
				login: {url: '/api/auth/login', method: 'post', propertyName: 'data.token_type'},
				logout: {url: '/api/auth/logout', method: 'post'},
			}
		}
	},
	watchLoggedIn: false
}
