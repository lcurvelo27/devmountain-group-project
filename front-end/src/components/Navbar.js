import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className='nav-container'>
      <Link to='/'>
        <a>Logo/Home</a>
      </Link>
      <div className='nav-content'>
        <Link to='/login'>
          <a>Login/Signup</a>
        </Link>
        <Link to='/logout'>
          <a>Logout</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
