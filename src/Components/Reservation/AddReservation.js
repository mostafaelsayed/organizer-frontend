import React from 'react';
import { Redirect } from 'react-router-dom';

class AddReservation extends React.Component {
    constructor() {
        super();

        this.addReservation = this.addReservation.bind(this);
    }

    addReservation(event) {
        event.preventDefault();
        const reservation = event.target.elements.reservation.value;
        console.log(reservation);

        this.props.startAddingReservation(reservation, this.props.user.id, this.props.history);
    }

    render() {
        return (
            <div>
            {this.props.failTokenStatus === false ? 
                <div>
                    <form className="reservation-form" onSubmit={(e) => this.addReservation(e)}>
                        <input name="reservation" placeholder="add reservation description" type="text" />
                        <button className="add-reservation">Add</button>
                    </form>
                </div>
            
            : <div><Redirect to="/login" /></div>
            }
            </div>
        );
    }
}

export default AddReservation;