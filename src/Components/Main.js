import React from 'react';
import Reservations from '../Components/Reservation/Reservations';
import PropTypes from 'prop-types';
import AddReservation from '../Components/Reservation/AddReservation';
import { Route, Link, withRouter, Redirect } from 'react-router-dom';
import ReservationDetails from './Reservation/ReservationDetails';
import Login from './Login';
import Register from './Register';
import LoginSuccess from './LoginSuccess';
import LoginForm from './LoginForm';
import SendConfirmationMail from './SendConfirmationMail';
import Footer from './Footer';
import ContactUs from './ContactUs';
import Help from './Help';

class App extends React.Component {

  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.startLoggingUserOut(this.props.history);
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
              {!localStorage.getItem('token') && <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>}
              {!localStorage.getItem('token') && <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>}
              {localStorage.getItem('token') && <li className="nav-item"><button className="nav-link logout-button" onClick={this.logout}>Logout</button></li>}
            </ul>
          </div>

        </nav>

        <div id="app-container">
          <Route exact path="/" render={() => (
            <h1 style={{color: 'white'}}>Welcome</h1>
          )}/>

          <Route exact path="/resend_confirmation_email" render={(params) => (
            <SendConfirmationMail {...this.props} {...params} />
          )}/>

          <Route exact path="/reservations" render={(params) => (
            // pass params in render to access location, match or history props
            <div className="app">
              <Reservations {...this.props} {...params} />
            </div>
          )}/>

          <Route path="/login" render={(params) => (
            <Login {...this.props} {...params} />
          )}/>

          <Route path="/register" render={(params) => (
            <Register {...this.props} {...params} />
          )}/>
          
          <Route path="/add-reservation" render={(params) => (
            <AddReservation {...this.props} {...params} />
          )}/>

          <Route path="/login_form" render={(params) => (
            <LoginForm {...this.props} {...params} />
          )}/>

          <Route path="/success_login" render={(params) => (
            <LoginSuccess {...this.props} {...params} />
          )}/>

          <Route path="/contact-us" render={() => (
            <ContactUs />
          )}/>

          <Route path="/help" render={() => (
            <Help />
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
        
        <div className="footer">
          <Footer />
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
