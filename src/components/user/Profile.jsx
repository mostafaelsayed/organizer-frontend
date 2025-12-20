import { useEffect, useState } from "react"
import { getUserReservations } from '../../api/user';
import Login from "./Login";
import { useNavigate } from "react-router";

export default function Profile() {

    const [userReservations, setUserReservations] = useState(undefined);
    const [notAuthenticated, setNotAuthenticated] = useState(undefined);
    const navigate = useNavigate();

    async function initPage() {
        const data = await getUserReservations();
        setUserReservations(data);
        if (!data || !data.user) {
            setNotAuthenticated(true);
        }
        else {
            setNotAuthenticated(false);
        }
    }

    useEffect(() => {
        initPage();
    }, []);

    async function getReservationDetails(data, reservation) {
        console.log('the reservation: ', reservation);
        reservation['detailsDisplayed'] = !reservation['detailsDisplayed'];
        const reservs = data.reservations.slice();
        const ind = reservs.findIndex(e => {
            return e.id == reservation.id;
        });
        reservs[ind] = reservation;
        const newReserv = { user: data.user, reservations: reservs };
        setUserReservations(newReserv);
    }

    function Profile({ data }) {
        console.log('user REser: ', data);
        if (data?.user) {
            return (<>
                <div>
                    <h1>Hello {data.user.firstName}</h1>
                    <h2>Below are your reservations:</h2>
                    <ul>
                        {data.reservations?.map(reservation => {
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


                                    <li style={{ "textAlign": "left" }}>
                                        {reservation.name} <button onClick={() => getReservationDetails(data, reservation)}>Click for details</button>
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </>
            )
        }
        else if (notAuthenticated === true) {
            useEffect(() => {
                navigate('/login');
            });
        }
    }

    return (
        <Profile data={userReservations} />
    )


}