import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import Navbar from '../Navbar'
import {getProfileDetails, updateEducation} from '../../ducks/action'
import TextField from './TextField'
import EducationFields from './EducationFields'

class Profile extends Component{x
  componentDidMount() {
    this.props.getProfileDetails(this.props.match.params.username)
  }
	render(){
		return(
			<div>
        <Navbar user = {this.props.user}/>
        {this.props.user
          ?
          <div>
            Account
            <TextField title="Image URL" value={this.props.user.imgurl}/>
            <TextField title="Username" value={this.props.user.username}/>
            <hr/>
            Name
            <TextField title="First" value={this.props.user.firstname}/>
            <TextField title="Last" value={this.props.user.lastname}/>
            <hr/>
            Description
            <TextField title="Bio" value={this.props.user.description}/>
            <hr/>
            Education
            {this.props.user.education.map((school, index) => {
              return(
                <div>
                  <EducationFields index={index} update={this.props.updateEducation}/>
                </div>
              )
            })}
            {this.props.user.skills.map(skill => {
              return(
                <div>
                  <TextField title="Skill" value={skill.skill}/>
                  <TextField title="Level" value={skill.lvl}/>
                </div>
              )
            })}
          </div>
          :
          'Loading...'
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
export default connect(mapStateToProps, {getProfileDetails, updateEducation})(Profile)
