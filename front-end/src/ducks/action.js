const type = require('./actionType')
const {getUsers, getProfile, updateEducation} = require('./utils/api')

module.exports = {
	updateName: name => {
		return {
			type: type.UPDATE_NAME,
			payload: name
		}
	},
	getUsersTiles: () => {
		return {
			type: type.GET_USERS,
			payload: getUsers()
		}
	},
	getProfileDetails: (username) => {
		return {
			type: type.GET_PROFILE_DETAILS,
			payload: getProfile(username)
		}
	},
	updateEducation: (details) => {
		return {
			type: type.UPDATE_EDUCATION,
			payload: updateEducation(details)
		}
	}
}
