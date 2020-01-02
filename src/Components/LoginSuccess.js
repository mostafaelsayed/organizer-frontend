import {Component} from 'react';
import React from 'react';


class LoginSuccess extends Component {

    componentDidMount() {
        localStorage.setItem('token', 'facebook_token');
        
        if (window.location.hash && window.location.hash === '#_=_') {
            this.props.history.push('/reservations');
        }
        this.props.logUserIn();
    }

    render() {
        return (
            <div>
               <h1>Login Success</h1>
            </div>
        );
    }
}

export default LoginSuccess;