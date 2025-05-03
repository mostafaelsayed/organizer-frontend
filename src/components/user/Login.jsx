import { useNavigate } from 'react-router';
import { login } from '../../api/user';
import { useEffect, useState } from 'react';
export default function Login() {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('userData'));
    useEffect(() => {
        if (loggedIn) {
            navigate("/profile");
        }
    });
    async function handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const response = await login(email, password);
        console.log('login response: ', response);
        if (response._data.id) {
            alert('login succeeded');
            localStorage.setItem('userData', JSON.stringify(response._data));
            setLoggedIn(true);
        }
    }
    if (!loggedIn) { 
        return (
            <form id='login'>
                <input type='text' id='login-email' placeholder='Enter your email' />
                <input type='password' id='login-password' placeholder='Enter your password' />
                <button onClick={handleLogin}></button>
            </form>
        );
    }
}