import {UPDATE_NAME} from './action'
import action from './action'
import type from './actionType'



const initialState = {
	name: ''
}

function reducer(state = initialState, action){
	switch(action.type){
		case type.UPDATE_NAME:
			return Object.assign({}, state, {name: action.payload})

		default:
			return state
	}
}

export default reducer