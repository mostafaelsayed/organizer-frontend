import React from 'react';
import logo from '../logo.svg';
import Calendar from '../Calendar/Calendar';
import Reservation from '../Reservation/Reservation';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Calendar date="2019" />
      <Reservation />
    </div>
    
  );
}

export default App;
