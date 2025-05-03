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
import Profile from './components/user/Profile.jsx';
import TopMenu from './components/TopMenu.jsx';
import Home from './components/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TopMenu></TopMenu>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
