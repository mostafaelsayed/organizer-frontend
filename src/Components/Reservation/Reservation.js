import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Reservation(props) {

    return (<div key={props.index} index={props.index} className="reservation-container">
        <li>{props.value.name}</li>
        <Link to={`/reservation/${props.value.id}`}>Go</Link>
        <button className="remove" onClick={() => {
            props.startRemovingReservation(props.index, props.value.id)
        }}>Remove</button>
    </div>);
}

Reservation.propTypes = {
    index: PropTypes.number,
    value: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number
    }),
    
}

export default Reservation;