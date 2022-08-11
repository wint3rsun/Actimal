import React from 'react';  

import ReactDOM from "react-dom/client";
import './index.scss';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";


// import Challenges from "./pages/challenges/Challenges";
// import Home from "./pages/home/Home";
// import MyPets from "./pages/myPets/MyPets";
// import Profile from "./pages/profile/Profile";
// import Register from "./Registration/Register";

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/challenges" element={<Challenges />} />
  //     <Route path="/myPets" element={<MyPets />} />
  //     <Route path="/profile" element={<Profile />} />
  //     <Route path="/register" element={<Register />} />
  //   </Routes>
  // </BrowserRouter>
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
