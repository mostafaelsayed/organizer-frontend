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

        if (reservation) {
            this.props.addReservation(reservation);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addReservation}>
                    <input name="reservation" placeholder="add reservation description" type="text" />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default AddReservation;