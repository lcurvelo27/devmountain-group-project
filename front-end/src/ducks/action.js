const {UPDATE_NAME, GET_USERS} = require('./actionType')
const {getUsers} = require('./utils/api')

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
	}
}