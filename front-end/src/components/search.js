import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import action from '../ducks/action'
const {updateName} = action

class Search extends Component{
	render(){
		return(
			<div>
				<p>test</p>
				<input type="text" onChange={(e) => this.props.updateName(e.target.value)}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		name: state.name
	}
}
export default connect(mapStateToProps, {updateName})(Search)