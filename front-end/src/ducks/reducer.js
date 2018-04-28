import type from './actionType'
import {dark, light, defaultTheme} from '../components/Themes/themes'



const initialState = {
	name: '',
	users: [],
	user: null,
	loading: false,
	color: null,
	theme: defaultTheme,
	searchString: ''
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
			return Object.assign({}, state, {loading: false, user: action.payload.data[0]})

		case type.DEFAULT:
			return Object.assign({}, state, {theme: defaultTheme})

		case type.LIGHT:
			return Object.assign({}, state, {theme: light})

		case type.DARK:
			return Object.assign({}, state, {theme: dark})

		case type.UPDATE_EDUCATION:
			return Object.assign({}, state)

		case type.UPDATE_EDUCATION_FULFILLED:
			let stateUpdate = Object.assign({}, state)
			let userUpdate = Object.assign({}, stateUpdate.user)
			let educationUpdate = Object.assign([], userUpdate.education)
			console.log(educationUpdate)
			let index = educationUpdate.findIndex(school => {
				return school.id === action.payload.data[0].id
			})
			educationUpdate[index] = action.payload.data[0]
			userUpdate.education = educationUpdate
			stateUpdate.user = userUpdate
			return stateUpdate

		case type.UPDATE_SEARCH_STRING:
			return Object.assign({}, state, {searchString: action.payload})
		
		default:
			return state
	}
}

export default reducer
