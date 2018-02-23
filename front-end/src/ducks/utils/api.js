var axios = require('axios')

module.exports = {
	getUsers: () => {
		return axios.get('http://localhost:3005/api/search/tiles').then(response => response.data)
	}
}