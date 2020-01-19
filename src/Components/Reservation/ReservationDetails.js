import React from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';
 
import "react-datepicker/dist/react-datepicker.css";

class ReservationDetails extends React.Component {

    constructor() {
        super();

        this.handlechange = false;

        //this.clickEdit = this.clickEdit.bind(this);
        this.saveEditReservation = this.saveEditReservation.bind(this);
    }

    clickEdit = () => {
        // console.log(this.props.editClicked);
        // // toggle edit button
        // this.props.editClicked = !this.props.editClicked;
        // console.log(this.props.editClicked);
        if (this.props.editClicked === false) {
            this.props.selectDate(new Date(moment(this.props.reservation.reservationDate + ' ' + this.props.reservation.reservationTime, 'YYYY-MM-DD HH:mm')));
        }
        this.props.clickEdit(!this.props.editClicked);
        
    }

    saveEditReservation(event) {
        event.preventDefault();
        let reservationDate = event.target.elements.reservationDate.value;
        let reservationName = event.target.elements.reservationName.value;

        console.log('reservationDate edited : ', reservationDate);
        console.log('name edited : ', reservationName);

        const reservation = {name: reservationName, reservationDate, id: this.props.reservation.id};
        console.log('reservation to edit : ', reservation);

        this.props.startEditingReservation(reservation, this.props.user.id, this.props.history);
    }

    handleDateChange = reservationDate => {
        
        console.log('handle date change : ', reservationDate);
        this.props.selectDate(reservationDate);
        this.handlechange = true;
    };

    componentDidMount() {
        console.log('id of reservation : ', this.props.match.params.id);
        this.props.startLoadingReservation(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.handlechange = false;
        this.props.clickEdit(false);
        this.props.selectDate(new Date(moment(this.props.reservation.reservationDate + ' ' + this.props.reservation.reservationTime, 'YYYY-MM-DD HH:mm')));
    }

    render() {
        return (
            <div className="reservation-details">
                <div><span className="reservation-details-headline">Details of { this.props.reservation.name } Reservation :</span></div>
                <br />

                
                {this.props.editClicked === false && this.props.reservation.reservationTime !== undefined && 
                    <div>
                        <div>Name : <span className="reservation-detail-name">{ this.props.reservation.name } </span></div>
                        <div>Time : <span className="reservation-detail-date">{ this.props.reservation.reservationDate + ' at ' + this.props.reservation.reservationTime }</span>
                        </div>

                        <div style={{marginTop: '0.5em'}}>
                            <button style={{marginRight: '0.5em'}} className="btn btn-info" onClick={this.clickEdit}>Edit</button>


                        

                            
                        </div>
                    </div>
                }

                {this.props.editClicked === true && this.props.reservation.reservationTime !== undefined && 
                    <form onSubmit={this.saveEditReservation}>
                        <input id="res-name" type="text" name="reservationName" defaultValue={this.props.reservation.name} />

                        <DatePicker id="res-date" name="reservationDate"
                            selected={this.handlechange === false ? new Date(moment(this.props.reservation.reservationDate + ' ' + this.props.reservation.reservationTime, 'YYYY-MM-DD HH:mm')) : this.props.reservationDate}
                            onChange={this.handleDateChange}
                            showTimeSelect
                            // timeFormat="HH:MM"
                            dateFormat="Pp"/>
                            <div style={{marginTop: '0.5em'}}>
                                <button style={{marginRight: '0.5em'}} type="button" className="btn btn-info" onClick={this.clickEdit}>Close</button>
                                <button type="submit" className="btn btn-info">Save</button>
                            </div>
                    </form>

                }

                
            </div>
        );
    }
}

export default ReservationDetails;