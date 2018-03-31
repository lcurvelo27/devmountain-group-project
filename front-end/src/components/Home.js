import React from 'react';
import { connect } from 'react-redux'
import Navbar from './Navbar'
import {centerPiece, welcome} from './homeStyle'

const Home = (props) => {

  return (
    <div>
      <Navbar/>
      <div style={centerPiece}>
        <h1 style={welcome}>Website Name</h1>
        <h5>Website name is a place where you can share your own, digtal resume in a unique way!</h5>
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
export default connect(mapStateToProps)(Home)
