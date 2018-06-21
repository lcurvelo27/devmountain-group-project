import React, {Component} from 'react'
import Navbar from './Navbar' 


class Login extends Component {
    render() {
        let textStyling = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            familyFont: 'Montserrat',
            fontWeight: '200'
        }

        return (
            <div>
                <div>
                    <Navbar user={false}/>
                </div>
                <div style={textStyling}>
                    <h1>Please log in.</h1> 
                </div>
            </div>
        )
    }
}

export default Login 