import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router";
import Login from './components/user/Login.jsx';
import Signup from './components/user/Signup.jsx';
import Profile from './components/user/Profile.jsx';
import TopMenu from './components/TopMenu.jsx';
import Home from './components/Home.jsx';
import DeleteUser from './components/user/DeleteUser.jsx';
import CreateReservation from './components/reservation/CreateReservation.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TopMenu></TopMenu>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/createreservation" element={<CreateReservation/>}/>
        <Route exact path="/deleteuser" element={<DeleteUser/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
