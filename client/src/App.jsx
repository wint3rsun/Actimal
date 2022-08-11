import React from 'react';  
import { useState, useEffect } from "react";

// import ReactDOM from "react-dom/client";
import './index.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Challenges from './pages/challenges/Challenges';
import Home from './pages/home/Home';
import MyPets from "./pages/myPets/MyPets";
import Profile from "./pages/profile/Profile";
import Register from "./Registration/Register"

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

function App() {
  const [user, setUser] = useState({});
  const info = localStorage.getItem('data');
  console.log("info",info);
  const data = JSON.parse(info);
 
  
  return (
  <BrowserRouter>
    <Routes >
      <Route path="/" element={<Home setUser={setUser}/>}/>
      <Route path="/challenges" element={<Challenges user={data}/>} />
      <Route path="/myPets" element={<MyPets />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
