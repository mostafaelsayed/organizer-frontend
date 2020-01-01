import {Component} from 'react';
import React from 'react';


class LoginSuccess extends Component {

    componentDidMount() {
        if (window.location.hash && window.location.hash === '#_=_') {
            //window.location.hash = '';
            //window.location.href = window.location.href.substr(0, window.location.href.indexOf('#'));
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