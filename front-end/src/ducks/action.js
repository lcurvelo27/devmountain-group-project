const {UPDATE_NAME, GET_USERS, GET_PROFILE_DETAILS} = require('./actionType')
const {getUsers, getProfile} = require('./utils/api')

module.exports = {
	updateName: name => {
		return {
			type: UPDATE_NAME,
			payload: name
		}
	},
	getUsersTiles: () => {
		return {
			type: GET_USERS,
			payload: getUsers()
		}
	},
	getProfileDetails: (username) => {
		return {
			type: GET_PROFILE_DETAILS,
			payload: getProfile(username)
		}
	}
}