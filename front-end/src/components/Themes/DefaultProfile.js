import React from 'react';
import { connect } from 'react-redux'
import Navbar from '../Navbar'
import {setTheme} from '../../ducks/action'


const DefaultProfile = (props) => {
  return (
    <div style={props.theme.wrapper}>
      <div style={props.theme.cvContainer}>
        <div style={props.theme.imageDiv}>
          <img src={props.user.imgurl} alt={`${props.user.username} profile picture`} style={{'borderRadius':100}}/>
          <h1 style={props.theme.titleColor}>{props.user.firstname} {props.user.lastname}</h1>
          <h5 style={props.theme.textColor}>{props.user.description}</h5>
        </div>
        <div style={props.theme.cvContent}>
          <div style={props.theme.rightPiece}>
            <h2 style={props.theme.titleColor}>Skills</h2>
              {props.user.skills.map(skill => {
                return(
                  <div key={skill.skill} style={props.theme.textColor}>
                    <h5>{skill.skill}: {skill.lvl}</h5>
                  </div>
                )
              })}
            <h2 style={props.theme.titleColor}>Education</h2>
            {props.user.education.map(school => {
              return(
                <div key={school.school} style={props.theme.textColor}>
                  <h4>{school.school}</h4>
                  <h5>{school.emphasis}</h5>
                  <h6>Start Date: {school.start_date}</h6>
                  <h6>End Date: {school.end_date}</h6>
                </div>
              )
            })}
          </div>
          <div style={props.theme.leftPiece}>
            <h2 style={props.theme.titleColor}>Experience</h2>
            {props.user.experience.map(experience => {
              return(
                <div key={experience.id} style={props.theme.textColor}>
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
