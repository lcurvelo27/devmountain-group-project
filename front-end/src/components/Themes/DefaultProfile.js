import React from 'react';
import { connect } from 'react-redux'
import Navbar from '../Navbar'


const DefaultProfile = (props) => {
  return (
    <div>
      <div className='cv-container column-center'>
        <img src={props.user.imgurl} alt={`${props.user.username} profile picture`} style={{'borderRadius':100}}/>
        <h1>{props.user.firstname} {props.user.lastname}</h1>
        <h5>{props.user.description}</h5>
        <hr/>
        <div className='cv-content center'>
          <div style={{'paddingLeft':150, 'borderLeft':'1px solid #8E8200', 'marginLeft':150}}>
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
    // add correct props here
    state: state
  }
}
export default connect(mapStateToProps)(DefaultProfile)
