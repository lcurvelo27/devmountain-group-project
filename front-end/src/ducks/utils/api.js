var axios = require('axios')
const {setTheme} = require ('../action')

module.exports = {
	getUsers: () => {
		return axios.get('http://localhost:3005/api/search/tiles').then(response => response.data)
	},
	 getProfile: (username) => {
    	return axios.get(`http://localhost:3005/api/users/${username}`).then(response => {
    		if(response.data[0]){
                console.log(response.data[0])
    			return response.data[0]
    		}
    		else {
    			return null
    		}
    	}).catch(err => {
        console.log(err)
      })
  	},
	updateEducation(details) {
		console.log('details', details)
		return axios.put(`http://localhost:3005/api/users/education`, details)
	}
}
