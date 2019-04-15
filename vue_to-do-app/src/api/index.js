import axios from 'axios'

const
	requireService = require.context('./service', false, /.service.js$/),
	instance = axios.create({
		baseURL: 'http://localhost:8080',
		responseType: 'json',
		// headers: Object.assign({
		// 	'Content-Type': 'application/json',
		// 	'Cache-Control': 'no-cache',
		// 	'Pragma': 'no-cache',
		// }, Vue.prototype.$settings.headers)
	})
	
	// export const intercept = fn => fn(instance.interceptors)

	// intercept(({ request, response }) => {
	// 	request.use(config => {
	// 		Vue.prototype.$preloader(true)
	
	// 		return config
	// 	})
	
	// 	response.use(config => {
	// 		Vue.prototype.$preloader(false) 
	
	// 		return config
	// 	}, error => {
	// 		Vue.prototype.$preloader(false)
	
	// 		return Promise.reject(error.response)
	// 	})
	// })
	
	class Api {
		constructor () {
			this.instance = instance
	
			requireService.keys().forEach(filename =>
				requireService(filename).default(this)
			)
		}
	
		install () {
			Vue.prototype.$api = this
		}
	}
	
	export default new Api()
	