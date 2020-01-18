import React from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';
 
import "react-datepicker/dist/react-datepicker.css";

class ReservationDetails extends React.Component {

    constructor() {
        super();
        //this.editClicked = false;
        this.clickEdit = this.clickEdit.bind(this);
    }

    clickEdit() {
        //this.editClicked = true;
        this.props.clickEdit(true);
    }

    saveEditReservation() {

    }

    handleDateChange = reservationDate => {
        console.log('handle date change : ', reservationDate);
        this.props.selectDate(reservationDate);
    };

    componentDidMount() {
        console.log('id of reservation : ', this.props.match.params.id);
        this.props.startLoadingReservation(this.props.match.params.id);
    }

    // componentWillUnmount() {
    //     this.props.selectDate(new Date());
    // }

    render() {
        return (
            <div className="reservation-details">
                <div><span className="reservation-details-headline">Details of { this.props.reservation.name } Reservation :</span></div>
                <br />
                {this.props.reservation.reservationTime &&
                    <div>
                        <div>Name : <span className="reservation-detail-name">{ this.props.editClicked === false ? this.props.reservation.name : <input type="text" name="name" /> }</span></div>
                        <div>Time : <span className="reservation-detail-date">{ this.props.editClicked === false ? this.props.reservation.reservationDate : <DatePicker name="reservationDate"
                        selected={new Date(moment(this.props.reservation.reservationDate + ' ' + this.props.reservation.reservationTime, 'YYYY-MM-DD HH:mm'))}
                        //selected={this.props.reservation.reservationDate + ', ' + this.props.reservation.reservationTime}
                        //selected={new Date()}
                        onChange={this.handleDateChange}
                        showTimeSelect
                        // timeFormat="HH:MM"
                        dateFormat="Pp"/> }</span></div>
                    </div>
                }

                <button className="btn btn-info" onClick={this.clickEdit}>Edit</button>
            </div>
        );
    }
}

export default ReservationDetails;