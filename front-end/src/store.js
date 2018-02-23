import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware' 
import reducer from './ducks/reducer'

export default createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(promiseMiddleware())
	)