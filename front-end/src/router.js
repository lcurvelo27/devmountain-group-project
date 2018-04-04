import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Search from './components/search'
import Profile from './components/Profile'
import Home from './components/Home'


export default(
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/search' component={Search} />
		<Route path='/:username' component={Profile} />
	</Switch>
)
