var type = require('./actionType')
const {UPDATE_NAME} = type

module.exports = {
	updateName: name => {
		return {
			type: UPDATE_NAME,
			payload: name
		}
	}
}