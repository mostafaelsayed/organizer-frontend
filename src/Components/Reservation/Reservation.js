import React from 'react';
import { Link } from 'react-router-dom';

class Reservation extends React.Component {

    render() {
        const element = (
            <div>
                <h1>Reservation here come</h1>
                <ul className="reservation-list">
                    <Link to="/add-reservation">add</Link>
                    {this.props.reservations.map((e, index) => 
                        <div key={index} index={index} className="reservation-container">
                            <li>{e.name}</li>
                            <Link to={`/single/${e.id}`}>Go</Link>
                            <button onClick={() => {
                                this.props.removeReservation(index)
                            }}>Remove</button>
                        </div>
                    )}
                </ul>
            </div>
        );


        return element;
    }
}

// Reservation.propTypes = {
//   reservations: PropTypes.array.isRequired,
//   onRemoveReservation: PropTypes.func.isRequired
// }

export default Reservation;