import React, { Component } from 'react'

class TextField extends Component{
  constructor() {
    super()
    this.state = {
      value: null
    }
  }
  componentDidMount() {
    this.setState({value: this.props.value})
  }
  updateValue(newValue) {
    this.setState({value: newValue})
  }
  cancelEdit() {
    this.setState({value: this.props.value})
  }
  render(){
    return (
      <div>
        <label>
          {this.props.title}
          <input type="text" value={this.state.value} onChange={(e) => this.updateValue(e.target.value)}/>
          {this.state.value !== this.props.value
            ?
            <div>
              <button onClick={()=>this.cancelEdit()}>Cancel</button>
              <button>Save</button>
            </div>
            :
            null
          }
        </label>
      </div>
    )
  }
}
export default TextField
