import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Search from './components/Search'
import Profile from './components/Profile'
import Home from './components/Home'
import Edit, { checkAuth } from './components/Edit/Edit'
import PrivateRoute from './components/PrivateRouter'
import Login from './components/Login'
import axios from 'axios'




export default(
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/search' component={Search} />
		<Route path='/profile/:username' component={Profile} />
		<Route path='/login' component={Login} exact/>
		<PrivateRoute path='/edit' component={Edit}/>
	</Switch>
)
