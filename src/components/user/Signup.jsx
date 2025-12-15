import { signup } from '../../api/user';
export default function Signup() {   
    async function handleSignup(e) {
        e.preventDefault();
        const email = document.getElementById('signup-email').value;
        const firstName = document.getElementById('signup-first').value;
        const lastName = document.getElementById('signup-last').value;
        const phoneNumber = document.getElementById('signup-phone').value;
        const password = document.getElementById('signup-password').value;
        const response = await signup(email, firstName, lastName, phoneNumber, password);
        console.log('signup response: ', response);
        if (response._data.id) {
            alert('signup succeeded');
            localStorage.setItem('userData', JSON.stringify(response._data));
            setLoggedIn(true);
        }
    }
    return (
        <form id='signup'>
            <input type='text' id='signup-email' placeholder='Enter your email' />
            <input type='text' id='signup-first' placeholder='Enter your first name' />
            <input type='text' id='signup-last' placeholder='Enter your last name' />
            <input type='text' id='signup-phone' placeholder='Enter your phone number' />
            <input type='password' id='signup-password' placeholder='Enter your password' />
            <button onClick={handleSignup}>Signup</button>
        </form>
    );
}