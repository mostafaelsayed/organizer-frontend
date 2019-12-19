import React from 'react';
import { Link, Redirect } from 'react-router-dom';
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
            <div>
            {this.props.failTokenStatus === false ? 
                <div>
                    <h1>Reservations here come</h1>
                    <ul className="reservation-list">
                        <Link to="/add-reservation">add</Link>
                        {this.props.reservations.map((e, index) => 
                            <Reservation className="child-reservation" {...this.props} key={index} index={index} value={e} />
                        )}
                    </ul>
                </div>
                : <div><Redirect to="/login" /></div>}
            </div>
        );
    }
}

export default Reservations;