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

        this.props.clickEdit(!this.props.editClicked);
    }

    saveEditReservation() {
        //event.preventDefault();
        let reservationDate = document.getElementById('res-date').value;
        let name = document.getElementById('res-name').value;

        console.log('reservationDate edited : ', reservationDate);
        console.log('name edited : ', name);

        const reservation = {name, reservationDate, id: this.props.reservation.id};
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
    }

    render() {
        return (
            <div className="reservation-details">
                <div><span className="reservation-details-headline">Details of { this.props.reservation.name } Reservation :</span></div>
                <br />
                {this.props.reservation.reservationTime &&
                    <div>
                        <div>Name : <span className="reservation-detail-name">{ this.props.editClicked === false ? this.props.reservation.name : <input id="res-name" type="text" name="name" defaultValue={this.props.reservation.name} /> }</span></div>
                        <div>Time : <span className="reservation-detail-date">{ this.props.editClicked === false ? this.props.reservation.reservationDate + ' at ' + this.props.reservation.reservationTime : <DatePicker id="res-date" name="reservationDate"
                            selected={this.handlechange === false ? new Date(moment(this.props.reservation.reservationDate + ' ' + this.props.reservation.reservationTime, 'YYYY-MM-DD HH:mm')) : this.props.reservationDate}
                            onChange={this.handleDateChange}
                            showTimeSelect
                            // timeFormat="HH:MM"
                            dateFormat="Pp"/> }</span>
                        </div>

                        <div style={{marginTop: '0.5em'}}>
                            <button style={{marginRight: '0.5em'}} className="btn btn-info" onClick={this.clickEdit}> {this.props.editClicked === false ? 'Edit' : 'Close'}</button>


                            {this.props.editClicked === true && <button className="btn btn-info" onClick={this.saveEditReservation}>Save</button>}
                        

                            
                        </div>
                    </div>
                }

                
            </div>
        );
    }
}

export default ReservationDetails;