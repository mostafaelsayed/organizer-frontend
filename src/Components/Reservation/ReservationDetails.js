import React from 'react';

class ReservationDetails extends React.Component {

    componentDidMount() {
        console.log('id of reservation : ', this.props.match.params.id);
        this.props.startLoadingReservation(this.props.match.params.id);
    }

    render() {
        // console.log(this.props.match);
        // const {reservations, match} = this.props;
        // console.log(reservations);
        // const id = (match.params.id);
        // console.log(id);
        // const reservation = reservations.find((reserv) => {return reserv.id === id;});
        // console.log(reservation);
        return <div>Details here : {this.props.reservation ? this.props.reservation.name : ''}</div>;
    }
}

export default ReservationDetails;