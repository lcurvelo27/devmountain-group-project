var axios = require('axios')
const {setTheme} = require ('../action')

module.exports = {
	getUsers: () => {
		return axios.get('http://localhost:3005/api/search/tiles').then(response => response.data)
	},
	 getProfile: (username) => {
    	return axios.get(`http://localhost:3005/api/users/${username}`, {withCredentials: true})
  	},
	updateEducation(details) {
		return axios.put(`http://localhost:3005/api/users/education`, details)
	},
	auth() {
		return axios.get('http://localhost:3005/auth/me', {withCredentials: true})
	}
}
