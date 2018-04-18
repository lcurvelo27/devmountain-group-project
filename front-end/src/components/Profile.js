import React, { Component } from 'react';
import { connect } from 'react-redux'
import DefaultProfile from './Themes/DefaultProfile'
import MissingPage from './MissingPage'
import {Link} from 'react-router-dom'
import {getProfileDetails, setTheme} from '../ducks/action'

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
    if(this.props.user){
        this.props.setTheme(this.props.user.theme)
    }
		return(
			<div>
        {
          this.props.loading
          ?
          <p>Loading...</p>
          :
            this.props.user
            ?
            <div>
              <div>
                <Link to='/'>
                  <i className="fas fa-sign-out-alt"></i>
                </Link>
              </div>
              <DefaultProfile user={this.props.user}/>
            </div>
            :
            <MissingPage username={this.props.match.params.username}/>
        }
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
export default connect(mapStateToProps, {getProfileDetails, setTheme})(Profile)
