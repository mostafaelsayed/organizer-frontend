import React from 'react';

class Single extends React.Component {
    render() {
        console.log(this.props.match);
        const {reservations, match} = this.props;
        console.log(reservations);
        const id = Number(match.params.id);
        console.log(id);
        const reservation = reservations.find((reserv) => {return reserv.id === id;});
        console.log(reservation);
        return <div>Single here : {reservation.name}</div>;
    }
}

export default Single;