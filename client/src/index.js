import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/home"
import MyChallenges from "./pages/myChallenges/myChallenges";
import MyPets from "./pages/myPets/myPets"
import Profile from "./pages/profile/Profile";

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss'

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
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
