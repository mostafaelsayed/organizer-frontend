import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Reservation extends React.Component {

    render() {
        return (<div>{this.props.failTokenStatus === false ? <div key={this.props.index} index={this.props.index} className="reservation-container">
        <li>{this.props.value.name}</li>
        <Link to={`/reservation/${this.props.value.id}`}>Go</Link>
        <button className="remove" onClick={this.props.startRemovingReservation.bind(this, this.props.index, this.props.value.id)}>Remove</button>
        </div> : <div><Redirect to="/login" /></div>}</div>
    );
    }
}

Reservation.propTypes = {
    index: PropTypes.number,
    value: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number
    }),
    
}

export default Reservation;