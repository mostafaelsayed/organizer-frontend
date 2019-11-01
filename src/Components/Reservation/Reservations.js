import React from 'react';
import { Link } from 'react-router-dom';
import Reservation from './Reservation';

class Reservations extends React.Component {

    render() {
        return (
            <div>
                <h1>Reservations here come</h1>
                <ul className="reservation-list">
                    <Link to="/add-reservation">add</Link>
                    {this.props.reservations.map((e, index) => 
                        <Reservation {...this.props} key={index} index={index} value={e} />
                    )}
                </ul>
            </div>
        );
    }
}

export default Reservations;