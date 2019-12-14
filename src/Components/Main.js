import React from 'react';
import Reservations from '../Components/Reservation/Reservations';
import PropTypes from 'prop-types';
import AddReservation from '../Components/Reservation/AddReservation';
import { Route, Link } from 'react-router-dom';

import ReservationDetails from './Reservation/ReservationDetails';
import Login from './Login';
import Register from './Register';



class App extends React.Component {

  componentDidMount() {
    this.props.startLoadingReservations();
  }

  // constructor() {
  //   super();
  // }
  
  render() {
    console.log(this.props);
    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-fixed my-nav">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            </ul>
          </div>
        </nav>

        <div id="app-container">
          <Route exact path="/" render={() => (
            <div className="App">
              <Reservations {...this.props} />
            </div>
          )}/>

          <Route path="/login" render={(params) => (
            <Login {...this.props} {...params} />
          )}/>

          <Route path="/register" render={(params) => (
            <Register {...this.props} {...params} />
          )}/>
          
          <Route path="/add-reservation" render={() => (
            <AddReservation {...this.props} />
          )}/>


          <Route path="/reservation/:id" render={(params) => (
            <ReservationDetails {...this.props} {...params} />
          )}/>
        </div>
        
         
      </div>
      
    );
  }

}

App.propTypes = {
  reservations: PropTypes.array.isRequired,
  // onRemoveReservation: PropTypes.func.isRequired
}

export default App;
