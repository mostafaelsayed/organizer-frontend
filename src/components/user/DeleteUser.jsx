import { useNavigate } from 'react-router';
import { deleteUser } from '../../api/user';
import { useEffect, useState } from 'react';
export default function DeleteUser() {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('userData'));
    useEffect(() => {
        if (loggedIn) {
            navigate("/profile");
        }
    });
    async function handleDelete(e) {
        e.preventDefault();
        const email = document.getElementById('delete-email').value;
        const response = await deleteUser(email);
        console.log('delete response: ', response);
        if (response._data.id) {
            alert('delete succeeded');
            localStorage.setItem('userData', JSON.stringify(response._data));
            setLoggedIn(true);
        }
    }
    return (
        <form id='delete'>
            <input type='text' id='delete-email' placeholder='Enter email' />
            <button onClick={handleDelete}></button>
        </form>
    );
}