import React from 'react';
import Reservations from '../Components/Reservation/Reservations';
import PropTypes from 'prop-types';
import AddReservation from '../Components/Reservation/AddReservation';
import { Route } from 'react-router-dom';

import ReservationDetails from './Reservation/ReservationDetails';

class App extends React.Component {

  constructor() {
    super();
  }
  
  render() {
    console.log(this.props);
    return (
      <div>
        <Route exact path="/" render={() => (
          <div className="App">
            <Reservations {...this.props} />
          </div>
        )}/>

        
        
        <Route path="/add-reservation" render={() => (
          <AddReservation {...this.props} />
        )}/>


        <Route path="/reservation/:id" render={(params) => (
          <ReservationDetails {...this.props} {...params} />
        )}/>


        
         
      </div>
      
    );
  }

}

// App.propTypes = {
//   reservations: PropTypes.array.isRequired,
//   onRemoveReservation: PropTypes.func.isRequired
// }

export default App;
