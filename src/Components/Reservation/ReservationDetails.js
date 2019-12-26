import React from 'react';

class ReservationDetails extends React.Component {

    componentDidMount() {
        console.log('id of reservation : ', this.props.match.params.id);
        this.props.startLoadingReservation(this.props.match.params.id);
    }

    render() {
        return <div className="reservation-details">Details here : { this.props.reservation.name }</div>;
    }
}

export default ReservationDetails;