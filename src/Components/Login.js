import React from 'react';


function Login(props) {
    return (
        <form>
            <div><input type="text" name="email" placeholder="Enter Your Email ..." /></div>
            <br />
            <div><input type="password" name="password" placeholder="Enter Your Password ..." /></div>
            <br /><br /><br />

            <button className="btn btn-primary" type="submit">Login</button>

        </form>
    );
}


export default Login;