import {RED, YELLOW, UPDATE_NAME, GET_USERS_PENDING, GET_USERS_FULFILLED, GET_PROFILE_DETAILS_FULFILLED, GET_PROFILE_DETAILS_PENDING} from './action'
import action from './action'
import type from './actionType'
import {yellow, red, green} from '../components/Themes/themes'



const initialState = {
	name: '',
	users: [],
	user: null,
	loading: false,
	color: null,
	theme: yellow
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

		case type.YELLOW:
			return Object.assign({}, state, {theme: yellow})

		case type.RED:
			return Object.assign({}, state, {theme: red})
		
		case type.GREEN:
			return Object.assign({}, state, {theme: green})

		default:
			return state
	}
}

export default reducer

