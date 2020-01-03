import {Component} from 'react';
import React from 'react';


class SendConfirmationMail extends Component {

    constructor() {
        super();
        this.sendConfirmationMail = this.sendConfirmationMail.bind(this);
    }

    sendConfirmationMail() {
        
        this.props.sendConfirmationMail(this.props.location.query.code);
    }

    render() {
        return (
            <div>
                <h1>Confirmation Mail not sent. Resend it</h1>
                <br />
                <button className="btn btn-primary" onClick={this.loginUser}>Resend Confirmation Mail</button>
            </div>
        );
    }
}


export default SendConfirmationMail;