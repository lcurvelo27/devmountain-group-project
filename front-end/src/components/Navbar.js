import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = (props) => {

  let login =  <Link to='/login'>
                  <p>Login/Signup</p>
                </Link>

  let logout = <Link to='/logout'>
                  <p>Logout</p>
                </Link>

  return (
    <nav className='nav-container'>
      <div className='nav-content'>    
      <Link to='/'>
        <p>Logo/Home</p>
      </Link>
        { props.user &&
          logout
        }
        { !props.user &&
          login
        }
      </div>
    </nav>
  )
}

export default Navbar
