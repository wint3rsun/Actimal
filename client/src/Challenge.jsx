import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

import ProgressBar from "./pages/profile/ProgressBar"
import RankList from "./RankList";
import Chat from "./Chat";

import "./Challenge.scss"

export default function Challenge({challenge, quest, characters}) {
  //for close button navigation
  const navigate = useNavigate();
  
  const [participants, setParticipants] = useState({
    top3: [],
    bottom: []
  });

  useEffect(() => {
    const participantsURL = `http://localhost:8080/participants/${challenge.id}`;

    axios.get(participantsURL)
    .then((res) => {
      const top3 = res.data.filter((p, index) => {if (index < 3) return p});
      const participants = res.data.filter((p,index) => {if (index >= 3) return p});
      setParticipants({
        top3: top3,
        bottom: participants
      });
    })
    .catch((error) => {
      console.log(error);
    });

  }, []);


  return (
    <main className="challenge position-relative">
      <button type="button" className="btn-close position-absolute" aria-label="Close" onClick={() => navigate(0)}></button>
      <section className="challenge-header mt-5">
        <h1>{quest.name}</h1>
        <h2>Leaderboard</h2>
      </section>

      <section className="position-relative">
        <RankList participants={participants} characters={characters} max={quest.goal} unit={quest.goal_units}/>
      </section>

      <section className="d-flex flex-row-reverse mb-3">
        <button className="btn btn-primary d-flex flex-column align-items-center mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><FontAwesomeIcon icon={faMessage}/> I am Chat!</button>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          
            <Chat username={"username1"} challenge_id={1} />
          
        </div>
        
      </section>
    </main>
  )
}