import React, { Component } from 'react'

class TextField extends Component{
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
    let education = this.props.value
    this.setState({education})
  }
  updateValue(newValue) {
    this.setState({education: newValue})
  }
  cancelEdit() {
    this.setState({education: this.props.value})
  }
  render(){
    return (
      <div>
        School Number
        <div>
          <label>
            <div>
              School<input type="text" value={this.state.education.school} onChange={(e) => this.updateValue(e.target.value)}/>
            </div>
            <div>
              Emphasis<input type="text" value={this.state.education.emphasis} onChange={(e) => this.updateValue(e.target.value)}/>
            </div>
            <div>
              Start Date<input type="text" value={this.state.education.start_date} onChange={(e) => this.updateValue(e.target.value)}/>
            </div>
            <div>
              End Date<input type="text" value={this.state.education.end_date} onChange={(e) => this.updateValue(e.target.value)}/>
            </div>
          </label>
        </div>
        {this.state.education !== this.props.value
          ?
          <div>
          <button onClick={()=>this.cancelEdit()}>Cancel</button>
          <button>Save</button>
          </div>
          :
          null
        }
      </div>
    )
  }
}
export default TextField
