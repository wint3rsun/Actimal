import React from 'react';  
import ReactDOM from "react-dom/client";
import socketIOClient from 'socket.io-client';
import './index.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import MyChallenges from "./pages/myChallenges/MyChallenges";
import MyPets from "./pages/myPets/MyPets";
import Profile from "./pages/profile/Profile";
import Register from "./Registration/Register"

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

useEffect(() => {
  console.log("TEST")
  const socket = socketIOClient(ENDPOINT);

  socket.on('connect', () => {
    console.log("we have connected!");

    })
  
}, [])

const root = ReactDOM.createRoot(
  document.getElementById("root")
);


root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/myChallenges" element={<MyChallenges />} />
      <Route path="/myPets" element={<MyPets />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
