import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Search from './components/search'

export default(
	<switch>
		<Route path='/search' component={Search} />
	</switch>
)