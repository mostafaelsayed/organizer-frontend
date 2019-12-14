import React from 'react';


class AddReservation extends React.Component {
    constructor() {
        super();

        this.addReservation = this.addReservation.bind(this);
    }

    addReservation(event) {
        event.preventDefault();
        const reservation = event.target.elements.reservation.value;
        console.log(reservation);

        this.props.startAddingReservation(reservation);
    }

    render() {
        return (
            <div>
                <form className="reservation-form" onSubmit={(e) => this.addReservation(e)}>
                    <input name="reservation" placeholder="add reservation description" type="text" />
                    <button className="add-reservation">Add</button>
                </form>
            </div>
        );
    }
}

export default AddReservation;