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
		var tiles = this.props.users,
			searchString = this.props.searchString.trim().toLowerCase();

		if(searchString.length > 0) {
			tiles = tiles.filter(user => user.firstname.toLowerCase().match(searchString))
		}
		return(
			<div>
				<div>
					<Navbar />
				</div>
				<p>test</p>
				<input type="text" onChange={(e) => this.props.updateSearchString(e.target.value)}/>
				<div style={{'display': 'flex', 'padding': 10}}>
					{
						tiles.map(user => {
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
					}
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