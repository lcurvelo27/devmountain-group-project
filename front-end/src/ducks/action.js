const type = require('./actionType')
const api = require('./utils/api')
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
			payload: api.getUsers()
		}
	},
	getProfileDetails: (username) => {
		return {
			type: type.GET_PROFILE_DETAILS,
			payload: api.getProfile(username)
		}
	},
	setTheme: (type) => {
		return {
			type: type
		}
	},
	changeValue: (value) => {
		return {
			type: type.UDPATE_VALUE,
			payload: getProfile(value)
		}
	},
	updateEducation: (details) => {
		return {
			type: type.UPDATE_EDUCATION,
			payload: updateEducation(details)
		}
	}
}
