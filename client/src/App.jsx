import { React, useState, useEffect } from "react";
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
import Sandbox from "./pages/challenges/sandbox/Sandbox";

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';


function App() {
  const [user, setUser] = useState();
  const [state, setState] = useState({
    challenges: [],
    quests: {},
    characters: {},
    user_challenges: {}
  });

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
        }))

        if(localStorage.getItem('data')) {
          const newUser = JSON.parse(localStorage.getItem('data'));
          newUser["character"] = all[2].data[newUser.character_id];
          setUser(newUser);
        };
    })
  }, []);
  

  return (
  <BrowserRouter>
    <Routes >
      <Route path="/" element={user ? <Navigate to="/challenges" /> : <Home setUser={setUser} state={state} />}/>
      <Route path="/challenges" element={user && <Challenges state={state} setState={setState} user={user} setUser={setUser}/>} />
      <Route path="/myPets" element={user && <MyPets user={user}/>} />
      <Route path="/profile" element={user && <Profile user={user} characters={state.characters} levels={state.levels} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/sandbox" element={<Sandbox />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
