import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

export default function Profile() {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('jwt'));
    useEffect(() => {
        if (!loggedIn) {
            navigate("/login");
        }
    });
    const [userData, setUserData] = useState(localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData')));

    async function getReservationDetails(reservation) {
        console.log('the reservation: ', reservation);
        const newUserData = JSON.parse(JSON.stringify(userData));
        newUserData.reservations.forEach(elem => {
            if (elem.id == reservation.id) {
                elem['detailsDisplayed'] = !elem['detailsDisplayed'];
            }
        })
        setUserData(newUserData);
    }
   
    if (userData) {
        return (
            <>
                <h1>Hello {userData.firstName}</h1>
                <h2>Below are your reservations:</h2>
                <ul>
                    {userData.reservations.map(reservation => {
                        return (
                            <div key={reservation.id}>
                                
                                    {reservation.detailsDisplayed &&
                                        (
                                            <div className="tooltip">
                                                <div className="tooltip-text"> Time of Creation: {reservation.createdAt} </div>
                                                <div className="tooltip-text"> Last Time of Update: {reservation.updatedAt} </div>
                                            </div>
                                        )
                                    }
                                

                                <li style={{"textAlign": "left"}}>
                                    {reservation.name} <button onClick={() => getReservationDetails(reservation)}>Click for details</button>
                                </li>
                            </div>
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