import React from 'react';
import { connect } from 'react-redux'
import Navbar from '../Navbar'
import {setTheme} from '../../ducks/action'


const DefaultProfile = (props) => {
  return (
    <div>
      <div style={props.theme.cvContainer}>
        <img src={props.user.imgurl} alt={`${props.user.username} profile picture`} style={{'borderRadius':100}}/>
        <h1>{props.user.firstname} {props.user.lastname}</h1>
        <h5>{props.user.description}</h5>
        <hr/>
        <div style={props.theme.cvContent}>
          <div style={props.theme.centerPiece}>
            <h2>Skills</h2>
              {props.user.skills.map(skill => {
                return(
                  <div key={skill.skill}>
                    <h5>{skill.skill}: {skill.lvl}</h5>
                  </div>
                )
              })}
              <hr/>
            <h2>Education</h2>
            {props.user.education.map(school => {
              return(
                <div key={school.school}>
                  <h4>{school.school}</h4>
                  <h5>{school.emphasis}</h5>
                  <h6>Start Date: {school.start_date}</h6>
                  <h6>End Date: {school.end_date}</h6>
                </div>
              )
            })}
          </div>
          <div>
            <h2>Experience</h2>
            {props.user.experience.map(experience => {
              return(
                <div key={experience.id}>
                  <h4>{experience.title}</h4>
                  <h5>{experience.company}</h5>
                  <h5>{experience.location}</h5>
                  <h5>{experience.description}</h5>
                  <h6>Start Date: {experience.start_date}</h6>
                  <h6>End Date: {experience.end_date}</h6>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    state: state,
    theme: state.theme
  }
}
export default connect(mapStateToProps, {setTheme})(DefaultProfile)
