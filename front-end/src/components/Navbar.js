import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = (props) => {

  function Login(){ 
    return (
      <Link to='/login'>
        <p>Login/Signup</p>
       </Link>
    )
  }

  function Logout(){ 
    return (
      <Link to='/logout'>
        <p>Logout</p>
       </Link>
    )
  }

  return (
    <nav className='nav-container'>
      <div className='nav-content'>    
      <Link to='/'>
        <p>Logo/Home</p>
      </Link>
        { props.user &&
          <Login />
        }
        { !props.user &&
          <Logout />
        }
      </div>
    </nav>
  )
}

export default Navbar
