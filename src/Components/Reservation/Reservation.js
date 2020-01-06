import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Reservation extends React.Component {

    render() {
        return (<span>{this.props.failTokenStatus === false ? <span key={this.props.index} index={this.props.index} className="reservation-container">
        <Link className="reservation-name" to={`/reservation/${this.props.value.id}`}>{this.props.value.name}</Link>
        </span> : <div><Redirect to="/login" /></div>}</span>
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