import {Component} from 'react';
import React from 'react';


class Login extends Component {

    constructor() {
        super();
        this.loginUser = this.loginUser.bind(this);
    }

    loginUser(event) {
        event.preventDefault();
        let email = event.target.elements.email.value;
        let password = event.target.elements.password.value;

        this.props.startLoggingUserIn({email: email, password: password});
    }

    render() {
        return (
            <form onSubmit={(e) => this.loginUser(e)}>
                <div><input type="text" name="email" placeholder="Enter Your Email ..." /></div>
                <br />
                <div><input type="password" name="password" placeholder="Enter Your Password ..." /></div>
                <br /><br /><br />

                <button className="btn btn-primary" type="submit">Login</button>

            </form>
        );
    }
}


export default Login;