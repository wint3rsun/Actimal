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

export default function Challenges() {
  const [mode, setMode] = useState(SHOW_ALL);

  const [state, setState] = useState({
    challenges: [],
    quests: {},
    characters: {},
    user_challenges: {}
  });

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
        characters: all[2],
        user_challenges: all[3].data
      }));
    });
  }, []);

  const [user, setUser] = useState({
    id: 4,
    username: "username4",
    email: "username4@gmail.com",
    experience_points: 30,
    levels: 3,
    character: {
      id: 1,
      avatar_url: "https://robohash.org/340c525dec61deba2666cb58c149840e?set=set1&bgset=&size=400x400",
      charactor_model: "https://img.freepik.com/free-vector/athlete-doing-isolated_1308-38032.jpg?w=996&t=st=1659985157~exp=1659985757~hmac=26a86086e35a3e9dba3bf83ea41b604851f16693a03d025f6c5eb6633f23d0cf"
    }
  });

  const show = (game) => {
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
      console.log(response);
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

  const ranking = (game) => {
    alert(`clicked see ranking ${game}`);
    setMode(SHOW_RANKING);
  }

  function toggleChallenges() {
    if(mode === SHOW_ALL) {
      setMode(SHOW_MY_CHALLENGES);
    }
    if (mode === SHOW_MY_CHALLENGES) {
      setMode(SHOW_ALL);
    }
  }

  const myChallengeList = [];

  const challengeList = state.challenges.map((challenge) => {
    const quest = state.quests[challenge.quest_id];
    const alreadyJoined = state.user_challenges[challenge.id]? true : false;
    const item = (
      <ChallengeListItem
        key={challenge.id}
        challenge={challenge}
        quest={quest}
        onJoin={join}
        onRanking={ranking}
        onShow={show}
        alreadyJoined={alreadyJoined}
      />
    );
    if (alreadyJoined) {
      myChallengeList.push(item);
      return item;
    } else {
      return item;
    }
  });

  return (
    <main>
      <TopNav />

      { mode === SHOW_ALL && (
        <div className="d-flex flex-row justify-content-between border">
        
        <div className="mx-5 my-5">
          <QuickStats user={user} />
          <button onClick={toggleChallenges} className="btn btn-primary"><i className="fa fa-bullseye"></i> My Challenges</button>
        </div>

        <div className="mx-5 my-5">
          {challengeList}
        </div>
        </div> )}

      { mode === SHOW_MY_CHALLENGES && (
        <div className="d-flex flex-row justify-content-between border">     
          <div className="mx-5 my-5">
            <QuickStats user={user} />
            <button onClick={toggleChallenges} className="btn btn-primary"><i className="fa fa-bullseye"></i>Show All Challenges</button>
          </div>
          <div className="mx-5 my-5">
            {myChallengeList}
          </div>
        </div> )}

      { mode === SHOW_RANKING && (
          <div className="d-flex flex-row justify-content-between border">
            <Challenge />
          </div>
      )}

      <Footer/>
    </main>
  );
}