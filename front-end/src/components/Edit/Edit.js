import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import Navbar from '../Navbar'
import {getProfileDetails, updateEducation} from '../../ducks/action'
import TextField from './TextField'
import EducationFields from './EducationFields'
import '../../App.css'

class Profile extends Component{x
  componentDidMount() {
    this.props.getProfileDetails(this.props.match.params.username)
  }
  render(){
    
    const titleText = {
      fontFamily: 'News Cycle',
      fontSize: '50px',
      marginRight: '100px'
    }

    const sectionSpace = {
      marginTop: '20px'
    }

    return(
      <div>
        <Navbar user = {this.props.user}/>
        <div className='editPageContainer'>
          {this.props.user
            ?
            <div>
              <p style={titleText}>Account</p>
              <TextField title="Image URL" value={this.props.user.imgurl}/>
              <TextField title="Username" value={this.props.user.username}/>
              <hr/>
              <p style={titleText}>Name</p>
              <TextField title="First Name" value={this.props.user.firstname}/>
              <TextField title="Last Name" value={this.props.user.lastname}/>
              <hr/>
              <p style={titleText}>Description</p>
              <TextField title="Bio" value={this.props.user.description}/>
              <hr/>
              <p style={titleText}>Education</p>
              {this.props.user.education.map((school, index) => {
                return(
                  <div style={sectionSpace}>
                    <EducationFields index={index} update={this.props.updateEducation} schoolField={this.props.user.education[0].school}/>
                  </div>
                )
              })}
              <hr/>
              <p style={titleText}>Skills</p>
              {this.props.user.skills.map(skill => {
                return(
                  <div style={sectionSpace}>
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
