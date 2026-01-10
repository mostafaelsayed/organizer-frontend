import { login, openidLogin } from '../../api/user';
export default function Login() {    
    async function handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const response = await login(email, password);
        console.log('login response: ', response);
        if (response._data.id) {
            alert('login succeeded');
            localStorage.setItem('userData', JSON.stringify(response._data));
            localStorage.setItem('jwt', response._data.jwt);
        }
    }
    async function openidBeginLogin() {
        const response = await openidLogin();
        console.log('openid res: ', response);
    }
    return (
        <>
            <form id='login'>
                <input type='text' id='login-email' placeholder='Enter your email' />
                <input type='password' id='login-password' placeholder='Enter your password' />
                <button onClick={handleLogin}>Login</button>
            </form>
            <div id="sign-in-google">
                <button onClick={openidBeginLogin}>Login with Google</button>
            </div>
        </>
    );
}