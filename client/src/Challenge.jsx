import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ProgressBar from "./pages/profile/ProgressBar"
import RankList from "./RankList";
import io from 'socket.io-client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import Chat from "./Chat";

import "./Challenge.scss"



export default function Challenge(props) {
  const navigate = useNavigate();
  
  

  return (
    <main className="challenge position-relative">
      <button type="button" className="btn-close position-absolute" aria-label="Close" onClick={() => navigate(0)}></button>
      <section className="challenge-header mt-5">
        <h1>I am a Challenge!</h1>
        <h2>Leaderboard</h2>
        <ProgressBar />
      </section>

      <section className="position-relative">
        <RankList />
      </section>

      <section className="d-flex flex-row-reverse mb-3">
        <button className="btn btn-primary d-flex flex-column align-items-center mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><FontAwesomeIcon icon={faMessage}/> I am Chat!</button>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          
            <Chat />
          
        </div>
        
      </section>
    </main>
  )
}