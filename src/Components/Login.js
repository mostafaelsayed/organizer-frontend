import {Component} from 'react';
import React from 'react';


class Login extends Component {

    constructor() {
        super();
        this.loginUser = this.loginUser.bind(this);
        this.loginUserWithFacebook = this.loginUserWithFacebook.bind(this);
    }

    loginUser(event) {
        this.props.history.push('/login_form');
    }

    loginUserWithFacebook(event) {
        event.preventDefault();

        this.props.startLoggingUserInWithFacebook();
    }

    render() {
        return (
            <div>
                <button className="btn btn-info" onClick={this.loginUser}>Login with your email</button>
                &nbsp;&nbsp;
                <button className="btn btn-info" onClick={this.loginUserWithFacebook}>Login with Facebook</button>
            </div>
        );
    }
}


export default Login;