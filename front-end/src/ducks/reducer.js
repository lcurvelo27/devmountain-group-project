import {UPDATE_NAME, GET_USERS_PENDING, GET_USERS_FULFILLED, GET_PROFILE_DETAILS_FULFILLED, GET_PROFILE_DETAILS_PENDING} from './action'
import action from './action'
import type from './actionType'



const initialState = {
	name: '',
	users: [],
	user: null,
	loading: false
}

function reducer(state = initialState, action){
	switch(action.type){
		case type.UPDATE_NAME:
			return Object.assign({}, state, {name: action.payload})

		case type.GET_USERS_FULFILLED:
			return Object.assign({}, state, {users: action.payload})

		case type.GET_PROFILE_DETAILS_PENDING:
			return Object.assign({}, state, {loading: true})

		case type.GET_PROFILE_DETAILS_FULFILLED:
			return Object.assign({}, state, {loading: false, user: action.payload})

		default:
			return state
	}
}

export default reducer

