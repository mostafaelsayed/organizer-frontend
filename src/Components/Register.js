import React from 'react';


class Register extends React.Component {
    constructor() {
        super();

        this.addUser = this.addUser.bind(this);
    }

    addUser(event) {
        event.preventDefault();
        console.log('the user to register : ', event.target.elements.email.value);
        this.props.startAddingUser({
            firstName: event.target.elements.firstName.value,
            lastName: event.target.elements.lastName.value,
            email: event.target.elements.email.value,
            phoneNumber: event.target.elements.phoneNumber.value,
            password: event.target.elements.password.value
        }, this.props.history);
    }

    render() {
        return (
            <div>
                {/*pass callback as function not as string like normal javascript would do */}
                <form onSubmit={this.addUser}>
                    <div><input type="email" name="email" placeholder="Enter Your Email ..." /></div>
                    <br />
                    <div><input type="text" name="firstName" placeholder="Enter Your First Name ..." /></div>
                    <br />
                    <div><input type="text" name="lastName" placeholder="Enter Your Last Name ..." /></div>
                    <br />
                    <div><input type="text" name="phoneNumber" placeholder="Enter Your Phone Number ..." /></div>
                    <br />
                    <div><input type="password" name="password" placeholder="Enter Your Password ..." /></div>
                    <br />
                    <div><input type="password" name="confirmPassword" placeholder="Confirm Your Password ..." /></div>
                    <br /><br /><br />

                    <button className="btn btn-primary" type="submit">Register</button>{/*// should add type="submit" to reflect any model changes }*/}

                </form>
            </div>
        );
    }
}


export default Register;