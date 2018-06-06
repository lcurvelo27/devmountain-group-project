import type from './actionType'
import {dark, light, defaultTheme} from '../components/Themes/themes'



const initialState = {
	name: '',
	users: [],
	user: null,
	loading: false,
	color: null,
	theme: defaultTheme,
	searchString: '',
	editSelected: ''
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
			console.log('UPDATE_EDUCATION_FULFILLED fired')
			let educationStateUpdate = Object.assign({}, state)
			let educationUserUpdate = Object.assign({}, educationStateUpdate.user)
			let educationUpdate = Object.assign([], educationUserUpdate.education)
			let educationIndex = state.user.education.findIndex(school => {
				return school.id === action.payload.data[0].id
			})
			educationUpdate[educationIndex] = action.payload.data[0]
			educationUserUpdate.education = educationUpdate
			educationStateUpdate.user = educationUserUpdate
			return educationStateUpdate

		case type.ADD_EDUCATION:
			return Object.assign({}, state)

		case type.ADD_EDUCATION_FULFILLED:
			let addEducationStateUpdate = Object.assign({}, state)
			let addEducationUserUpdate = Object.assign({}, addEducationStateUpdate.user)
			let addEducationUpdate = Object.assign([], addEducationUserUpdate.education)
			addEducationUpdate.push(action.payload.data[0])
			addEducationUserUpdate.education = addEducationUpdate
			addEducationStateUpdate.user = addEducationUserUpdate
			return addEducationStateUpdate

		case type.DELETE_EDUCATION:
			return Object.assign({}, state)

		case type.DELETE_EDUCATION_FULFILLED:
			let deleteEducationState = Object.assign({}, state)
			let deleteEducationUser = Object.assign({}, deleteEducationState.user)
			let deleteEducationUpdate = Object.assign([], deleteEducationUser.education)
			console.log('payload', action.payload)
			let deleteEducationIndex = deleteEducationUpdate.findIndex(education => {
				return education.id === action.payload.data.id
			})
			deleteEducationUpdate.splice(deleteEducationIndex, 1)
			deleteEducationUser.education = deleteEducationUpdate
			deleteEducationState.user = deleteEducationUser
			return deleteEducationState

		case type.UPDATE_SKILL:
			return Object.assign({}, state)

		case type.UPDATE_SKILL_FULFILLED:
			let skillStateUpdate = Object.assign({}, state)
			let skillUserUpdate = Object.assign({}, skillStateUpdate.user)
			let skillUpdate = Object.assign([], skillUserUpdate.skills)
			let skillIndex = state.user.skills.findIndex(skill => {
				return skill.id === action.payload.data[0].id
			})
			skillUpdate[skillIndex] = action.payload.data[0]
			skillUserUpdate.skills = skillUpdate
			skillStateUpdate.user = skillUserUpdate
			return skillStateUpdate

		case type.ADD_SKILL:
			return Object.assign({}, state)

		case type.ADD_SKILL_FULFILLED:
			let addSkillStateUpdate = Object.assign({}, state)
			let addSkillUserUpdate = Object.assign({}, addSkillStateUpdate.user)
			let addSkillUpdate = Object.assign([], addSkillUserUpdate.skills)
			addSkillUpdate.push(action.payload.data[0])
			addSkillUserUpdate.skills = addSkillUpdate
			addSkillStateUpdate.user = addSkillUserUpdate
			return addSkillStateUpdate

		case type.DELETE_SKILL:
			return Object.assign({}, state)

		case type.DELETE_SKILL_FULFILLED:
			let deleteSkillState = Object.assign({}, state)
			let deleteSkillUser = Object.assign({}, deleteSkillState.user)
			let deleteSkillUpdate = Object.assign([], deleteSkillUser.skills)
			console.log('payload', action.payload)
			let deleteSkillIndex = deleteSkillUpdate.findIndex(skill => {
				return skill.id === action.payload.data.id
			})
			deleteSkillUpdate.splice(deleteSkillIndex, 1)
			deleteSkillUser.skills = deleteSkillUpdate
			deleteSkillState.user = deleteSkillUser
			return deleteSkillState

		case type.UPDATE_SEARCH_STRING:
			return Object.assign({}, state, {searchString: action.payload})

		case type.UPDATE_EDIT_SELECTED:
			return Object.assign({}, state, {editSelected: action.payload})


		default:
			return state
	}
}

export default reducer
