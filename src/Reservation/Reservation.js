import React from 'react';
import {Link} from 'react-router-dom';

class Reservation extends React.Component {
    // constructor() {
    //     super();
        

    //     // this.addReservation = this.addReservation.bind(this);
    // }

    // addReservation(reservation) {
    //     this.setState((state) => {
    //         reservations: state.reservations.concat(reservation)
    //     });
    // }
    

    render() {
        const element = (
            <div>
                <h1>Reservation here come</h1>
                <ul className="reservation-list">
                    <Link to="/add-reservation">add</Link>
                    {this.props.reservations.map((e, index) => 
                        <div key={index} className="reservation-container">
                            <li>{e}</li>
                            <button onClick={() => {
                                this.props.onRemoveReservation(e)
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