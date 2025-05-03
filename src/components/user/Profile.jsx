import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

export default function Profile() {
    const navigate = useNavigate();
    
    const [userData] = useState(localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData')));
   
    if (userData) {
        return (
            <>
                <h1>Hello {userData.firstName}</h1>
                <h2>Below are your reservations:</h2>
                <ul>
                    {userData.reservations.map(reservation => {
                        return (
                            <li style={{"textAlign": "left"}} key={reservation.id}>
                                {reservation.name} <button>Click for details</button>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
    else {
        useEffect(() => {
            navigate('/login');
        });
    }

    
}