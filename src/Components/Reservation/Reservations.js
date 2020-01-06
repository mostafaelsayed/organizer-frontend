import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Reservation from './Reservation';

class Reservations extends React.Component {

    componentDidMount() {
        this.props.startLoadingReservations();
        console.log('this.props.failTokenStatus : ', this.props.failTokenStatus);
    }

    componentDidUpdate() {
        console.log('this.props : ', this.props);
        if (this.props.failTokenStatus === true) {
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div className="reservations-table-container">
            {this.props.failTokenStatus === false ? 
                <div>                    
                    <table className="reservations-table">
                            <thead>
                                <tr>
                                    <th>Your Reservations</th>
                                    <th>Time</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.reservations.map((e, index) => 
                                    <tr key={index}>
                                        <td>
                                            <Reservation className="child-reservation"
                                                {...this.props} key={index} index={index} value={e} />
                                        </td>
                                        <td>2020-01-05</td>
                                        <td>
                                        <button className="remove" onClick={this.props.startRemovingReservation.bind(this, index, e.id)}>Remove</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                    </table>
                </div>
                : <div><Redirect to="/login" /></div>}

                <br />

                <Link to="/add-reservation">Add Reservation</Link>
            </div>

            
        );
    }
}

export default Reservations;