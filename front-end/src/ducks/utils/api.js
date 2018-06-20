var axios = require('axios')
const {setTheme} = require ('../action')

module.exports = {
	getUsers: () => {
		return axios.get('http://localhost:3005/api/search/tiles').then(response => response.data)
	},
	getProfile: (username) => {
    return axios.get(`http://localhost:3005/api/users/${username}`)
  },
	addEducation: (details) => {
		return axios.post(`http://localhost:3005/api/users/education`, details)
	},
	updateEducation: (details) => {
		return axios.put(`http://localhost:3005/api/users/education`, details)
	},
	deleteEducation: (details) => {
		return axios.delete(`http://localhost:3005/api/users/education`, {data: details})
	},
	addSkill: (details) => {
		return axios.post(`http://localhost:3005/api/users/skills`, details)
	},
	updateSkill: (details) => {
		return axios.put(`http://localhost:3005/api/users/skills`, details)
	},
	deleteSkill: (details) => {
		return axios.delete(`http://localhost:3005/api/users/skills`, {data: details})
	},
	addExperience: (details) => {
		return axios.post(`http://localhost:3005/api/users/experience`, details)
	},
	updateExperience: (details) => {
		return axios.put(`http://localhost:3005/api/users/experience`, details)
	},
	deleteExperience: (details) => {
		return axios.delete(`http://localhost:3005/api/users/experience`, {data: details})
	},
	updateUser: (user) => {
		console.log(user)
		return axios.put(`http://localhost:3005/api/users`, user)
	}
}
