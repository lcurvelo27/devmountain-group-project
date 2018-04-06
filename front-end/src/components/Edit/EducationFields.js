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
      }
    }
  }
  componentDidMount() {
    let education = this.props.school
    this.setState({education})
  }
  updateValue(field, newValue) {
    let education = Object.assign({}, this.state.education)
    education[field] = newValue
    education.authid = 'abc123'
    this.setState({education: education})
  }
  cancelEdit() {
    this.setState({education: this.props.school})
  }
  saveEdit() {
    this.props.update(this.state.education)
  }
  render(){
    return (
      <div>
        School Number
        <div>
          <label>
            <div>
              School<input type="text" value={this.state.education.school} onChange={(e) => this.updateValue('school', e.target.value)}/>
            </div>
            <div>
              Emphasis<input type="text" value={this.state.education.emphasis} onChange={(e) => this.updateValue('emphasis', e.target.value)}/>
            </div>
            <div>
              Start Date<input type="text" value={this.state.education.start_date} onChange={(e) => this.updateValue('start_date', e.target.value)}/>
            </div>
            <div>
              End Date<input type="text" value={this.state.education.end_date} onChange={(e) => this.updateValue('end_date', e.target.value)}/>
            </div>
          </label>
        </div>
        {this.state.education !== this.props.school
          ?
          <div>
          <button onClick={()=>this.cancelEdit()}>Cancel</button>
          <button onClick={()=>this.saveEdit()}>Save</button>
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
    school: state.user.education[this.props.index]
  }
}
export default connect(mapStateToProps)(EducationField)
