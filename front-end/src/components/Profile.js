import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import DefaultProfile from './Themes/DefaultProfile'
import MissingPage from './MissingPage'

class Profile extends Component{
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      user: null
    }
  }
  getProfileDetails(username) {
    axios.get(`http://localhost:3005/api/users/${username}`)
      .then(res => {
        if(res.data[0]){
          this.setState({loading: false, user: res.data[0]})
        } else {
          this.setState({loading: false, user: null})
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  componentDidMount() {
    this.getProfileDetails(this.props.match.params.username)
  }
  componentWillReceiveProps(nextProps) {
    console.log('receive props run')
    if(this.props.match.params.username !== nextProps.match.params.username) {
      console.log('usernames dont match')
        this.setState({loading: true, user: null})
        this.getProfileDetails(nextProps.match.params.username)
    }
  }
	render(){
		return(
			<div>
        {
          this.state.loading
          ?
          <p>Loading...</p>
          :
            this.state.user
            ?
            <DefaultProfile user={this.state.user}/>
            :
            <MissingPage username={this.props.match.params.username}/>
        }
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		name: state.name
	}
}
export default connect(mapStateToProps)(Profile)
