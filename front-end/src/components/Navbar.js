import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = (props) => {


  return (
    <nav className='nav-container'>
      <div className='nav-content'>    
      <Link to='/'>
        <p>Logo/Home</p>
      </Link>
        { props.user &&
          <div style={{display: 'flex', justifyContent: 'space-around', width: 200}}>
            <Link to='/Search'>
              <p>Search</p>
            </Link> 
            <Link to='/edit'>
              <p>Account</p>
            </Link>           
            <Link to='/Logout'>
              <p>Logout</p>
            </Link>
          </div>
        }
        { !props.user &&
          <div style={{display: 'flex', justifyContent: 'space-around', width: 200}}>
            <Link to='/search'>
              <p>Search</p>
            </Link>
            <a href='http://localhost:3005/auth/login'>
              <p>Login/Signup</p>
            </a>
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar
