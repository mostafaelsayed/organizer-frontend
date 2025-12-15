import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { createReservation } from '../../api/reservation';

export default function CreateReservation() {
    const navigate = useNavigate();
    const [loggedIn] = useState(localStorage.getItem('jwt'));
    useEffect(() => {
        if (!loggedIn) {
            navigate("/login");
        }
    });
    async function create(e) {
        e.preventDefault();
        const name = document.getElementById('reservation-name').value;
        const description = document.getElementById('reservation-description').value;

        const response = await createReservation(name, description);
        console.log(' response: ', response);
        if (response._data.id) {
            alert(' succeeded');
            localStorage.setItem('userData', JSON.stringify(response._data));
        }
    }
    if (loggedIn) {
        return (
            <form id='reservation-create'>
                <input type='text' id='reservation-name' placeholder='Enter name' />
                <input type='text' id='reservation-description' placeholder='Enter description' />
                <button onClick={create}>Create</button>
            </form>
        );
    }
}