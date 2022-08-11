import { React, useState, useEffect } from "react";
import axios from "axios"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './index.scss';

import Challenges from './pages/challenges/Challenges';
import Home from './pages/home/Home';
import MyPets from "./pages/myPets/MyPets";
import Profile from "./pages/profile/Profile";
import Register from "./Registration/Register"

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';


function App() {
  const [user, setUser] = useState({});
  const [state, setState] = useState({
    challenges: [],
    quests: {},
    characters: {},
    user_challenges: {}
  });

  const info = localStorage.getItem('data');
  const data = JSON.parse(info);

  useEffect(() => {
    const challengesURL = "http://localhost:8080/challenges";
    const questsURL = "http://localhost:8080/challenges/quests";
    const charactersURL = "http://localhost:8080/characters";

    Promise.all([
      axios.get(challengesURL),
      axios.get(questsURL),
      axios.get(charactersURL),
    ]).then((all) => {
      
        setState(prev => ({
          ...prev,
          challenges: all[0].data,
          quests: all[1].data,
          characters: all[2].data,
        }));
    });
  }, []);
  

  return (
  <BrowserRouter>
    <Routes >
      <Route path="/" element={<Home setUser={setUser}/>}/>
      <Route path="/challenges" element={data? <Challenges state={state} setState={setState} user={data}/> : <Home setUser={setUser}/>} />
      <Route path="/myPets" element={data ? <MyPets state={state}/> : <Home setUser={setUser}/>} />
      <Route path="/profile" element={data ? <Profile user={data} characters={state.characters}/> : <Home setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
