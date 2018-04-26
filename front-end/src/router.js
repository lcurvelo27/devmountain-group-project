import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Search from './components/search'
import Profile from './components/Profile'
import Home from './components/Home'
import Edit from './components/Edit/Edit'



export default(
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/search' component={Search} />
		<Route path='/edit/:username' component={Edit} />
		<Route path='/:username' component={Profile} exact/>
	</Switch>
)
