import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = (props) => {

  let login =  <Link to='/login'>
                  <a>Login/Signup</a>
                </Link>

  let logout = <Link to='/logout'>
                  <a>Logout</a>
                </Link>
                
  return (
    <nav className='nav-container'>
      <Link to='/'>
        <a>Logo/Home</a>
      </Link>
      <div className='nav-content'>
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
