import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

export default function Profile() {
    const [userData] = useState(JSON.parse(localStorage.getItem('userData')));
    if (userData.id !== undefined) {
        return (
            <>
                <h1>Hello {userData.firstName}</h1>
                <h2>Below is your reservations:</h2>
                <ul>
                    {userData.reservations.map(reservation => {
                        return (
                            <li key={reservation.id}>
                                {reservation.name}
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
    else {
        useEffect(() => {
            useNavigate()('/login');
        })
    }
}