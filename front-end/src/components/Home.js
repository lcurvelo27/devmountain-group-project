import React from 'react';
import { connect } from 'react-redux'
import Navbar from './Navbar'

const Home = (props) => {
  let centerPiece = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center'
  }

  let welcome = {
    'font-family': 'Monoton',
    'font-size': '60px',
    'letter-spacing': '10px',
    color: '#EEDE01',
    'text-shadow': '0px 2px black'
  }

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
