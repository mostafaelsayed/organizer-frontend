import React from 'react';
import { Redirect } from 'react-router-dom';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class AddReservation extends React.Component {
    constructor() {
        super();

        this.addReservation = this.addReservation.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addReservation(event) {
        event.preventDefault();
        const reservation = {name: event.target.elements.reservation.value, reservationDate: event.target.elements.reservationDate.value};
        console.log('reservation to add : ', reservation);

        this.props.startAddingReservation(reservation, this.props.user.id, this.props.history);
    }

    handleChange = reservationDate => {
        console.log('handle date change : ', reservationDate);
        this.props.selectDate(reservationDate);
    };

    componentWillUnmount() {
        this.props.selectDate(new Date());
    }

    render() {
        return (
            <div>
            {this.props.failTokenStatus === false ? 
                <div>
                    <form className="reservation-form" onSubmit={this.addReservation}>
                        <input name="reservation" placeholder="add reservation description" type="text" />
                        <DatePicker
                            name="reservationDate"
                            selected={this.props.reservationDate}
                            onChange={this.handleChange}
                            showTimeSelect
                            dateFormat="Pp"
                        />
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