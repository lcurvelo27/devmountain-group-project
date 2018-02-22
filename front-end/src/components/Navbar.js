import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav>
      <Link to='/'>
        <a>Logo/Home</a>
      </Link>
      <Link to='/login'>
        <a>Login/Signup</a>
      </Link>
      <Link to='/logout'>
        <a>Logout</a>
      </Link>
    </nav>
  )
}

export default Navbar
