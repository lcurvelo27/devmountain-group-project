import action from './action'
import type from './actionType'



const initialState = {
	name: '',
	users: [],
	user: null,
	loading: false,
	test: null
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

		case type.UPDATE_EDUCATION:
			return Object.assign({}, state)

		case type.UPDATE_EDUCATION_FULFILLED:
			let update = Object.assign({}, state)
			let index = update.user.education.findIndex(school => school.id === action.payload.id)
			update.user.education[index] = action.payload
			console.log(update)
			return update

		default:
			return state
	}
}

export default reducer
