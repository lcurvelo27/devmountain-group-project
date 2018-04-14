import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
// prop => index
// mapStateToProps(state)
// education: user.education[index]

class EducationField extends Component{
  constructor() {
    super()
    this.state = {
      education: {
        school: null,
        emphasis: null,
        id: null,
        start_date: null,
        end_date: null
      },
      editing: false
    }
  }
  componentDidMount() {
    console.log(this.props.school)
  }
  updateValue(newValue) {
    this.setState({school: newValue, editing: true})
  }
  cancelEdit() {
    console.log(this.props.schoolField)
    this.setState({school: this.props.schoolField, editing: false})
  }
  
  render(){
    console.log(this.props.schoolField)
    return (
      <div>
        School Number
        <div>
          <label>
            <div>
              School<input type="text" value={this.state.education.school ? this.state.education.school : this.props.schoolField} onChange={(e) => this.updateValue(e.target.value)}/>
            </div>
            <div>
              Emphasis<input type="text" onChange={(e) => this.updateValue('emphasis', e.target.value)}/>
            </div>
            <div>
              Start Date<input type="text" onChange={(e) => this.updateValue('start_date', e.target.value)}/>
            </div>
            <div>
              End Date<input type="text" onChange={(e) => this.updateValue('end_date', e.target.value)}/>
            </div>
          </label>
        </div>
        {this.state.editing 
          ? 
          <div>
          <button onClick={()=>this.cancelEdit()}>Cancel</button>
          <button onClick={()=>this.updateEducation(this.state.school)}>Save</button>
          </div>
          :
          null
        }
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    school: state.school
  }
}
export default connect(mapStateToProps)(EducationField)
