import { useNavigate } from 'react-router';
import './TopMenu.css'
export default function TopMenu() {
    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem('userData');
        navigate('/home');
    }
    return (
        <>
            <div className="top-menu">
                <a className="top-menu-item top-menu-first"href="/home">Home</a>
                <a className="top-menu-item" href="/login">Login</a>
                <a className="top-menu-item"href="/profile">Profile</a>
                <button type="button" className="top-menu-item" onClick={logout}>Logout</button>
            </div>
        </>
    )
}