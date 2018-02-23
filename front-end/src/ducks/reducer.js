import {UPDATE_NAME, GET_USERS_PENDING, GET_USERS_FULFILLED} from './action'
import action from './action'
import type from './actionType'



const initialState = {
	name: '',
	users: []
}

function reducer(state = initialState, action){
	switch(action.type){
		case type.UPDATE_NAME:
			return Object.assign({}, state, {name: action.payload})

		case type.GET_USERS_FULFILLED:
			return Object.assign({}, state, {users: action.payload})

		default:
			return state
	}
}

export default reducer