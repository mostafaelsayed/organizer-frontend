import {Component} from 'react';
import React from 'react';


class LoginForm extends Component {

    constructor() {
        super();
        this.loginUser = this.loginUser.bind(this);
    }

    loginUser(event) {
        event.preventDefault();
        let email = event.target.elements.email.value;
        let password = event.target.elements.password.value;

        this.props.startLoggingUserIn({email: email, password: password}, this.props.history);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.loginUser}>{/*pass callback as function not as string like normal javascript would do */}
                    <div><input type="text" name="email" placeholder="Enter Your Email ..." /></div>
                    <br />
                    <div><input type="password" name="password" placeholder="Enter Your Password ..." /></div>
                    <br /><br /><br />

                    <button className="btn btn-info" type="submit">Login</button>

                </form>
            </div>
        );
    }
}

export default LoginForm;