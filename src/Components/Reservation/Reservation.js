import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Reservation(props) {

    return (<div key={props.index} index={props.index} className="reservation-container">
        <li>{props.value.name}</li>
        <Link to={`/reservation/${props.value.id}`}>Go</Link>
        <button onClick={() => {
            props.removeReservation(props.index)
        }}>Remove</button>
    </div>);
}

Reservation.propTypes = {
    index: PropTypes.number,
    value: PropTypes.shape({
        name: PropTypes.string
    }),
    
}

export default Reservation;