import { useState, useEffect } from "react";
import axios from "axios";

import TopNav from "../../TopNav";
import Footer from "../../Footer";
import ChallengeListItem from "../../ChallengeListItem";
import QuickStats from "../../QuickStats";
import Challenge from "../../Challenge";

const SHOW_ALL = "SHOW_ALL";
const SHOW_RANKING = "SHOW_RANKING";
const SHOW_MY_CHALLENGES = "SHOW_MY_CHALLENGES";
const SHOW_AVAILABLE = "SHOW_AVAILABLE";

export default function Challenges({user, state, setState, setUser}) {
  const [mode, setMode] = useState(SHOW_ALL);
  const [currentChallenge, setCurrentChallenge] = useState({});
  
  useEffect(() => {
    const userChallengesURL = `http://localhost:8080/participants/?user=${user.id}`;

    Promise.all([
      axios.get(userChallengesURL)
    ]).then((all) => {
        setState(prev => ({
          ...prev,
          user_challenges: all[0].data
        })
      );
      
    });
  }, []);

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
  
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function syncData() {
    const current_progress = Object.values(state.user_challenges)[0].progress;
    console.log(current_progress);
    const number = Number(getRandomArbitrary(10,1000).toFixed(2));
    console.log(number);
    const update = number+ Number(current_progress);
    console.log(update);
    const progress = {
      user_id: user.id,
      updata_progress: update.toFixed(2)
    }
    axios
    .put((`http://localhost:8080/participants/update_data`), { progress })
    .then((response) => {
     console.log(response.data);
     window.location.reload()
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
      <TopNav setUser={setUser}/>

      { mode === SHOW_ALL && (
        <div className="d-flex flex-row justify-content-between border">
        
        <div className="mx-5 my-5">
          <QuickStats user={user} />
          <h1 className="fix-title">All Challenges</h1>
          <button onClick={() => toggleChallengesView(SHOW_MY_CHALLENGES)} className="btn btn-primary me-2 fix"><i className="fa fa-bullseye"></i> My Challenges</button>
          <button onClick={() => toggleChallengesView(SHOW_AVAILABLE)} className="btn btn-primary me-2 fix"><i className="fa fa-bullseye"></i> Available</button>
          <button onClick={syncData} className="btn btn-primary fix"><i className="fa fa-bullseye"></i> Sync data</button>
        </div>

        <div className="mx-5 my-5">
          {challengeList}
        </div>
        </div>
      )}

      { mode === SHOW_MY_CHALLENGES && (
        <div className="d-flex flex-row justify-content-between border">     
          <div className="mx-5 my-5">
            <QuickStats user={user} />
            <h1 className="fix-title">My Challenges</h1>
            <button onClick={() => toggleChallengesView(SHOW_ALL)} className="btn btn-primary me-2 fix"><i className="fa fa-bullseye"></i>Dashboard</button>
            <button onClick={() => toggleChallengesView(SHOW_AVAILABLE)} className="btn btn-primary me-2 fix"><i className="fa fa-bullseye"></i> Available</button>
            <button onClick={syncData} className="btn btn-primary fix"><i className="fa fa-bullseye"></i> Sync data</button>
          </div>
          <div className="mx-5 my-5">
            {myChallengeList}
          </div>
        </div>
      )}

      { mode === SHOW_RANKING && (
          <div className="d-flex flex-row justify-content-between border">
            <Challenge characters={state.characters} challenge={currentChallenge} quest={state.quests[currentChallenge.quest_id]} user={user}/>
          </div>
      )}

      { mode === SHOW_AVAILABLE && (
        <div className="d-flex flex-row justify-content-between border">     
          <div className="mx-5 my-5">
            <QuickStats user={user} />
            <h1 className="fix-title">Available Challenges</h1>
            <button onClick={() => toggleChallengesView(SHOW_ALL)} className="btn btn-primary me-2 fix"><i className="fa fa-bullseye"></i>Dashboard</button>
            <button onClick={() => toggleChallengesView(SHOW_MY_CHALLENGES)} className="btn btn-primary me-2 fix"><i className="fa fa-bullseye"></i> My Challenges</button>
            <button onClick={syncData} className="btn btn-primary fix"><i className="fa fa-bullseye "></i> Sync data</button>
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