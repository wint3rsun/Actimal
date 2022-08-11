import { useState, useEffect } from "react";
import axios from "axios"

import TopNav from "../../TopNav";
import Footer from "../../Footer";
import ChallengeListItem from "../../ChallengeListItem";
import QuickStats from "../../QuickStats";
import Challenge from "../../Challenge";

const SHOW_ALL = "SHOW_ALL";
const SHOW_RANKING = "SHOW_RANKING";
const SHOW_MY_CHALLENGES = "SHOW_MY_CHALLENGES";
const SHOW_AVAILABLE = "SHOW_AVAILABLE";

export default function Challenges({user}) {
  // console.log("data",data);
  const [mode, setMode] = useState(SHOW_ALL);
  const [flag, setflag] = useState(false);
  // let flag = false;

  const [state, setState] = useState({
    challenges: [],
    quests: {},
    characters: {},
    user_challenges: {}
  });

  // const [user, setUser] = useState({});

  const [currentChallenge, setCurrentChallenge] = useState({});

  useEffect(() => {
    const challengesURL = "http://localhost:8080/challenges";
    const questsURL = "http://localhost:8080/challenges/quests";
    const charactersURL = "http://localhost:8080/characters"
    const userChallengesURL = `http://localhost:8080/participants/?user=${user.id}`;

    Promise.all([
      axios.get(challengesURL),
      axios.get(questsURL),
      axios.get(charactersURL),
      axios.get(userChallengesURL)
    ]).then((all) => {
      

        setState(prev => ({
          ...prev,
          challenges: all[0].data,
          quests: all[1].data,
          characters: all[2].data,
          user_challenges: all[3].data
        }
        )
      
      );
      setflag(true);
    
      

    })
    
  }, []);
  
  
  
   (async () => {
       
        if(state.challenges[0]){
          user['character'] = state.characters[user.character_id];
          

        }
    })();
  

  const showDetail = (game) => {
    document.getElementById("challenge-detail-btn").click();
  }

  function join(game_id) {
    const game = {
      user_id: user.id,
      game_challenge_id: game_id
    }
    axios
    .put((`http://localhost:8080/participants/new`), { game })
    .then((response) => {
      const user_challenges = {
        ...state.user_challenges,
        [game_id]: response.data[0]
      };

      setState({
        ...state,
        user_challenges
      });
    })
    .catch(err=>console.log(err));
  }

  const ranking = (game_challenge) => {
    setCurrentChallenge(game_challenge);
    setMode(SHOW_RANKING);
  }

  function toggleChallengesView(view) {
    if(view === SHOW_ALL) {
      setMode(SHOW_ALL);
    }
    if (view === SHOW_MY_CHALLENGES) {
      setMode(SHOW_MY_CHALLENGES);
    }
    if (view === SHOW_AVAILABLE) {
      setMode(SHOW_AVAILABLE);
    }
  }

  const myChallengeList = [];
  const availableChallenges = [];

  const challengeList = state.challenges.map((challenge) => {
    const quest = state.quests[challenge.quest_id];
    const alreadyJoined = state.user_challenges[challenge.id]? true : false;
    const isRequiredLevel = user.level >= quest.required_level;
    const item = (
      <ChallengeListItem
        key={challenge.id}
        challenge={challenge}
        quest={quest}
        onJoin={join}
        onRanking={ranking}
        onShow={showDetail}
        alreadyJoined={alreadyJoined}
        isRequiredLevel={isRequiredLevel}
      />
    );

    if (alreadyJoined) {
      myChallengeList.push(item);
    } else if (!alreadyJoined && isRequiredLevel) {
      availableChallenges.push(item);
    }
    return item;
  });
  
  return (
        <main>
      <TopNav />

      { flag && mode === SHOW_ALL && (
        <div className="d-flex flex-row justify-content-between border">
        
        <div className="mx-5 my-5">
          <QuickStats user={user} />
          <h1>All Challenges</h1>
          <button onClick={() => toggleChallengesView(SHOW_MY_CHALLENGES)} className="btn btn-primary me-2"><i className="fa fa-bullseye"></i> My Challenges</button>
          <button onClick={() => toggleChallengesView(SHOW_AVAILABLE)} className="btn btn-primary"><i className="fa fa-bullseye"></i> Available</button>
        </div>

        <div className="mx-5 my-5">
          {challengeList}
        </div>
        </div>
      )}

      {flag && mode === SHOW_MY_CHALLENGES && (
        <div className="d-flex flex-row justify-content-between border">     
          <div className="mx-5 my-5">
            <QuickStats user={user} />
            <h1>My Challenges</h1>
            <button onClick={() => toggleChallengesView(SHOW_ALL)} className="btn btn-primary me-2"><i className="fa fa-bullseye"></i>Dashboard</button>
            <button onClick={() => toggleChallengesView(SHOW_AVAILABLE)} className="btn btn-primary"><i className="fa fa-bullseye"></i> Available</button>
          </div>
          <div className="mx-5 my-5">
            {myChallengeList}
          </div>
        </div>
      )}

      { flag && mode === SHOW_RANKING && (
          <div className="d-flex flex-row justify-content-between border">
            <Challenge characters={state.characters} challenge={currentChallenge} quest={state.quests[currentChallenge.quest_id]} user={user}/>
          </div>
      )}

      { flag && mode === SHOW_AVAILABLE && (
        <div className="d-flex flex-row justify-content-between border">     
          <div className="mx-5 my-5">
            <QuickStats user={user} />
            <h1>Available Challenges</h1>
            <button onClick={() => toggleChallengesView(SHOW_ALL)} className="btn btn-primary me-2"><i className="fa fa-bullseye"></i>Dashboard</button>
            <button onClick={() => toggleChallengesView(SHOW_MY_CHALLENGES)} className="btn btn-primary"><i className="fa fa-bullseye"></i> My Challenges</button>
          </div>
          <div className="mx-5 my-5">
            {availableChallenges}
          </div>
        </div>
      )}

      <Footer/>
    </main>

  );
}