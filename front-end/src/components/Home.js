import React from 'react';
import { connect } from 'react-redux'
import Navbar from './Navbar'
import {welcome} from './homeStyle'
import resume from './images/default-theme.png'
import {Link} from 'react-router-dom'
import '../App.css'

const ButtonWindow = (props) => {
  const center = {
    'display': 'flex',
    'flexDirection': 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  return (
    <div className='homeSection' style={center}>
        <div style={{textAlign: 'center'}}>
          <p style={{'fontFamily': 'News Cycle', fontSize: '30px'}}>{props.children}</p>
        </div>
        <div>
        <Link to={`/${props.button}`}>
            <button className='button'>
              {props.button}
            </button>
          </Link>
        </div>
      </div>
    )
}

const Home = (props) => {
  
  const buttonsAlign = {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-around',
    'margin-top': '50px'
  }

  return (
    <div>
      <Navbar/>
      <div className='centerPiece'>
        <h1 style={welcome}>Website Name</h1>
        <h5>Website name is a place where you can share your own, digtal resume in a unique way!</h5>
      </div>
      <div className='homeContent'>
        <div className='homeText'>
          <p>We provide a service which will allow you to build AND show your resume. 
          Our goal is to let you focus on what content you want to display, and we will take care of the structure of it.</p> 
        </div>
        <div>
          <img src={resume} alt="default resume" className='resume'/>
        </div>
      </div>
      <div className='homeFunctions'>
        <div style={buttonsAlign}>
          <ButtonWindow button='Search'>
          <p>Search a potential employee.</p>
          </ButtonWindow>
          <ButtonWindow button='Sign in'>
          <p>Is this your first time visiting? Create a profile!</p>
          </ButtonWindow>
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
export default connect(mapStateToProps)(Home)
