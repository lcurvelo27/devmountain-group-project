import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import DefaultProfile from './Themes/DefaultProfile'
import MissingPage from './MissingPage'
import Navbar from './Navbar'
import {getProfileDetails} from '../ducks/action'

class Profile extends Component{

  componentDidMount() {
    this.props.getProfileDetails(this.props.match.params.username)
  }
  componentWillReceiveProps(nextProps) {
    console.log('receive props run')
    if(this.props.match.params.username !== nextProps.match.params.username) {
      console.log('usernames dont match')
        this.props.getProfileDetails(nextProps.match.params.username)
    }
  }
	render(){
		return(
			<div>
        <Navbar user = {this.props.user}/>
          <div>
        {
          this.props.loading
          ?
          <p>Loading...</p>
          :
            this.props.user
            ?
            <DefaultProfile user={this.props.user}/>
            :
            <MissingPage username={this.props.match.params.username}/>
        }
          </div>
			  </div>
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
    loading: state.loading
	}
}
export default connect(mapStateToProps, {getProfileDetails})(Profile)
