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
import Register from "./Registration/Register";
import LevelUp from "./pages/challenges/LevelUp";

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';


function App() {
  const [user, setUser] = useState({});
  const [flag, setflag] = useState(false);
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
    const levelsURL = "http://localhost:8080/levels";

    Promise.all([
      axios.get(challengesURL),
      axios.get(questsURL),
      axios.get(charactersURL),
      axios.get(levelsURL)
    ]).then((all) => {
      
        setState(prev => ({
          ...prev,
          challenges: all[0].data,
          quests: all[1].data,
          characters: all[2].data,
          levels: all[3].data
        }));
        setflag(true);
    });
  }, []);
  

  return (
  <BrowserRouter>
    <Routes >
      <Route path="/" element={<Home setUser={setUser} state={state} />}/>
      <Route path="/challenges" element={data? <Challenges state={state} setState={setState} user={data} flag={flag}/> : <Home setUser={setUser}/>} />
      <Route path="/myPets" element={data ? <MyPets user={data}/> : <Home setUser={setUser}/>} />
      <Route path="/profile" element={data ? <Profile user={data} characters={state.characters} levels={state.levels} flag={flag}/> : <Home setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/LevelUp" element={<LevelUp />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
