import React, { Component } from 'react'

class TextField extends Component{
  constructor() {
    super()
    this.state = {
      skills: {
        skill: '',
        lvl: '',
        id: ''
      }
    }
  }
  componentDidMount() {
    let skills = this.props.value
    this.setState({skills})
  }
  updateValue(newValue) {
    this.setState({skills: newValue})
  }
  cancelEdit() {
    this.setState({skills: this.props.value})
  }
  render(){
    return (
      <div>
        School Number
        <div>
          <label>
            <div>
              School<input type="text" value={this.state.skills.skill} onChange={(e) => this.updateValue(e.target.value)}/>
            </div>
            <div>
              Emphasis<input type="text" value={this.state.skills.lvl} onChange={(e) => this.updateValue(e.target.value)}/>
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
