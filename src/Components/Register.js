import React from 'react';


// function Register(props) {
//     return (
//         <div>
//             <form onSubmit={(e) => props.addUser(e)}>
//                 <div><input type="email" name="email" placeholder="Enter Your Email ..." /></div>
//                 <br />
//                 <div><input type="text" name="firstName" placeholder="Enter Your First Name ..." /></div>
//                 <br />
//                 <div><input type="text" name="lastName" placeholder="Enter Your Last Name ..." /></div>
//                 <br />
//                 <div><input type="text" name="phoneNumber" placeholder="Enter Your Phone Number ..." /></div>
//                 <br />
//                 <div><input type="password" name="password" placeholder="Enter Your Password ..." /></div>
//                 <br />
//                 <div><input type="password" name="confirmPassword" placeholder="Confirm Your Password ..." /></div>
//                 <br /><br /><br />

//                 <button className="btn btn-primary">Register</button>

//             </form>
//         </div>
//     );
// }


class Register extends React.Component {
    constructor() {
        super();

        this.addUser = this.addUser.bind(this);
    }

    addUser(event) {
        // event.preventDefault();
        // const reservation = event.target.elements.reservation.value;
        // console.log(reservation);

        // this.props.startAddingReservation(reservation);
        event.preventDefault();
        console.log('the user : ', event.target.elements.email.value);
        this.props.startAddingUser({
            firstName: event.target.elements.firstName.value,
            lastName: event.target.elements.lastName.value,
            email: event.target.elements.email.value,
            phoneNumber: event.target.elements.phoneNumber.value,
            password: event.target.elements.password.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.addUser(e)}>
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

                    <button className="btn btn-primary">Register</button>

                </form>
            </div>
        );
    }
}


export default Register;