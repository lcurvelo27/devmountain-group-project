import React from 'react';
import { connect } from 'react-redux'
import Navbar from './Navbar'

const Home = (props) => {
  return (
    <div>
      <Navbar/>
      <h1>Welcome to Website Name!</h1>
      <h5>Website name is a place where you can share your own, digtal resume in a unique way!</h5>
      <hr/>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    // add correct props here
    state: state
  }
}
export default connect(mapStateToProps)(Home)
