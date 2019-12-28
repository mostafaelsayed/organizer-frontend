import React from 'react';
import Reservations from '../Components/Reservation/Reservations';
import PropTypes from 'prop-types';
import AddReservation from '../Components/Reservation/AddReservation';
import { Route, Link, withRouter, Redirect } from 'react-router-dom';

import ReservationDetails from './Reservation/ReservationDetails';
import Login from './Login';
import Register from './Register';



class App extends React.Component {

  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.startLogginUserOut(this.props.history);
  }
  
  render() {
    // console.log('initial props : ', this.props);
    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-fixed my-nav">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item active"><Link className="nav-link" to="/reservations">Your Reservations</Link></li>
              {!localStorage.getItem('jwt') && <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>}
              {!localStorage.getItem('jwt') && <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>}
              {localStorage.getItem('jwt') && <li className="nav-item"><button className="btn btn-primary btn-sm" onClick={this.logout}>Logout</button></li>}
            </ul>
          </div>
        </nav>

        <div id="app-container">
          <Route exact path="/" render={() => (
            <h1>Welcome</h1>
          )}/>

          
          <Route exact path="/reservations" render={(params) => (
            // pass params in render to access location, match or history props
            <div className="App">
              <Reservations {...this.props} {...params} />
            </div>
          )}/>

          <Route path="/login" render={(params) => (
            <Login {...this.props} {...params} />
          )}/>

          <Route path="/register" render={() => (
            <Register {...this.props} />
          )}/>
          
          <Route path="/add-reservation" render={(params) => (
            <AddReservation {...this.props} {...params} />
          )}/>

          <div>
            {
            this.props.failTokenStatus === false ?
              <Route path="/reservation/:id" render={(params) => (
                <ReservationDetails {...this.props} {...params} />
              )}/>
            
              : <Redirect to="/login" />
            }
          </div>
        </div>
        
         
      </div>
      
    );
  }

}

App.propTypes = {
  reservations: PropTypes.array.isRequired,
  // onRemoveReservation: PropTypes.func.isRequired
}

// to access props location, match
export default withRouter(App);
