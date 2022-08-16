import { React, useState, useEffect, createContext } from "react";
import axios from "axios"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import './index.scss';

import Challenges from './pages/challenges/Challenges';
import Home from './pages/home/Home';
import MyPets from "./pages/myPets/MyPets";
import Profile from "./pages/profile/Profile";
import Register from "./Registration/Register"
import WorkoutChallenge from "./pages/challenges/WorkoutChallengeCopy"
import Register from "./Registration/Register";
import LevelUp from "./pages/challenges/LevelUp";

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';


function App() {
  const [user, setUser] = useState(null);
  const [state, setState] = useState({
    challenges: [],
    quests: {},
    characters: {},
    user_challenges: {}
  });

  function loadData(user) {
    const challengesURL = "http://localhost:8080/challenges";
    const questsURL = "http://localhost:8080/challenges/quests";
    const charactersURL = "http://localhost:8080/characters";
    const levelsURL = "http://localhost:8080/levels";
    const userLevel = "http://localhost:8080/users/2"
    
    Promise.all([
      axios.get(challengesURL),
      axios.get(questsURL),
      axios.get(charactersURL),
      axios.get(levelsURL),
      axios.get(userLevel)
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        challenges: all[0].data,
        quests: all[1].data,
        characters: all[2].data,
        levels: all[3].data
      }));
      user["character"] = all[2].data[user.id];
      user.level= all[4].data.level;
      user.experience_points = all[4].data.experience_points;
      
      setUser(user);
      localStorage.setItem('data', JSON.stringify(user));
    });
  }

  function updateUserLvl (level, exp) {
    setUser(prev => ({
      ...prev,
      level: level,
      experience_points: exp
    }));
  }

  useEffect(()=>{
    if(localStorage.getItem('data') && !user) {
      loadData(JSON.parse(localStorage.getItem('data')));
    }
  },[])

  
  return (
  <BrowserRouter>
    <Routes >
      <Route path="/" element={ user === null && <Home loadData={loadData} /> || <Navigate to="/challenges"/>} />
      <Route path="/challenges" element={(user && <Challenges state={state} setState={setState} user={user} setUser={setUser} updateUserLvl={updateUserLvl}/>) || <Navigate to="/"/>} />
      <Route path="/myPets" element={(user && <MyPets user={user}/>) || <Navigate to="/"/>} />
      <Route path="/profile" element={(user && <Profile user={user} characters={state.characters} levels={state.levels}/>) || <Navigate to="/"/> } />
      <Route path="/register" element={<Register />} />
      <Route path="/sandbox" element={<WorkoutChallenge user={user} state={state} />} />
      <Route path="*" element={<Navigate to="/"/>} />
      <Route path="/LevelUp" element={<LevelUp />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
