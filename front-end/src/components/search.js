import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import {updateName, getUsersTiles, updateSearchString} from '../ducks/action'


class Search extends Component{

	componentDidMount() {
		this.props.getUsersTiles()
	}

	render(){
		const tiles = this.props.users.map(user => {
			return(
				<div key={user.username} style={{'padding': 20}}>
					<img src={user.imgurl} alt='avatar'/>
					<div>
						{user.firstname + ' ' + user.lastname} 						
					</div>
					<div>
						{user.username}
					</div>
				</div>
			)
		})

		const searchString = this.props.searchString.trim().toLowerCase();

		return(
			<div>
				<div>
					<Navbar />
				</div>
				<p>test</p>
				<input type="text" onChange={(e) => this.props.updateName(e.target.value)}/>
				<div style={{'display': 'flex', 'padding': 10}}>
					{tiles}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		name: state.name,
		users: state.users,
		searchString: state.searchString
	}
}
export default connect(mapStateToProps, {updateName, getUsersTiles, updateSearchString})(Search)