import React from 'react';
import Calendar from '../Calendar/Calendar';
import Reservation from '../Reservation/Reservation';
import PropTypes from 'prop-types';
import './App.css';
import AddReservation from '../Reservation/AddReservation';
import {Route} from 'react-router-dom';

class App extends React.Component {

  constructor() {
      super();
      this.state = {
          reservations: ['hotel reservation', 'doctor oppointment']
      };

      // this.addReservation = this.addReservation.bind(this);
      this.removeReservation = this.removeReservation.bind(this);
      this.addReservation = this.addReservation.bind(this);
      // this.propTypes = {
      //   reservations: PropTypes.array.isRequired,
      //   onRemoveReservation: PropTypes.func.isRequired
      // }
  }
  
  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <div className="App">
            <Calendar date="2019" />
            <Reservation reservations={this.state.reservations} onRemoveReservation={this.removeReservation} />
          </div>
        )}>

        </Route>
        
        <Route path="/add-reservation" render={() => (
          <AddReservation onAddReservation={this.addReservation}/>
        )}>

        </Route>
         
      </div>
      
    );
  }

  // addReservation(reservation) {
  //   this.setState((state) => ({
  //     reservations: state.reservations.concat(reservation)
  //   }))
  // }

  removeReservation(reservation) {
    console.log(reservation);
    this.setState((state) => ({
      reservations: state.reservations.filter((r) => {return r != reservation;})
    }))
  }

  addReservation(reservation) {
    console.log(reservation);
    this.setState({
      reservations: this.state.reservations.concat(reservation)
    });
  }

  
}

// App.propTypes = {
//   reservations: PropTypes.array.isRequired,
//   onRemoveReservation: PropTypes.func.isRequired
// }

export default App;
