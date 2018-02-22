import React from 'react';
import { connect } from 'react-redux'
import Navbar from '../Navbar'

const DefaultProfile = (props) => {
  return (
    <div>
      <Navbar/>
      <img src={props.user.imgurl} alt={`${props.user.username} profile picture`}/>
      <h1>{props.user.firstname} {props.user.lastname}</h1>
      <h5>{props.user.description}</h5>
      <hr/>
      <h2>Skills</h2>
        {props.user.skills.map(skill => {
          return(
            <div>
              <h5>{skill.skill}: {skill.lvl}</h5>
            </div>
          )
        })}
        <hr/>
      <h2>Education</h2>
      {props.user.education.map(school => {
        return(
          <div>
            <h4>{school.school}</h4>
            <h5>{school.emphasis}</h5>
            <h6>Start Date: {school.start_date}</h6>
            <h6>End Date: {school.end_date}</h6>
          </div>
        )
      })}

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
