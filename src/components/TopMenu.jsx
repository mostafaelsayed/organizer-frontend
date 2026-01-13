import { useNavigate } from 'react-router';
import './TopMenu.css'
import { sendRequest } from '../api/api_utils';
export default function TopMenu() {
    const navigate = useNavigate();
    async function logout() {
        const res = await sendRequest(import.meta.env.VITE_SERVER_URL + '/logout', "POST");
        console.log('llogout res: ', res);
        if (res == 200) {
            navigate('/login');
        }
    }
    return (
        <>
            <div className="top-menu">
                <a className="top-menu-item top-menu-first"href="/home">Home</a>
                <a className="top-menu-item" href="/signup">Signup</a>
                <a className="top-menu-item" href="/login">Login</a>
                <a className="top-menu-item"href="/profile">Profile</a>
                <a className="top-menu-item"href="/createreservation">Create Reservation</a>
                <a className="top-menu-item"href="/deleteuser">Delete User</a>
                <button type="button" className="top-menu-item" onClick={logout}>Logout</button>
            </div>
        </>
    )
}