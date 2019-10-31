import React from 'react';
import Reservation from '../Components/Reservation/Reservation';
import PropTypes from 'prop-types';
import AddReservation from '../Components/Reservation/AddReservation';
import { Route } from 'react-router-dom';

import Single from './Single';

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
            <Reservation {...this.props} />
          </div>
        )}/>

        
        
        <Route path="/add-reservation" render={() => (
          <AddReservation {...this.props} />
        )}/>


        <Route path="/single/:id" render={(params) => (
          <Single {...this.props} {...params} />
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
