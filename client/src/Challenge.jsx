import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import io from 'socket.io-client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

import RankList from "./RankList";

import "./Challenge.scss";
import Screen from "./Screen";

// const socket = io.connect("http://localhost:8080");
const socket = io.connect("http://192.168.0.20:8080");


export default function Challenge({challenge, quest, characters, user}) {
  //for close button navigation
  const navigate = useNavigate();

  const [username, setUsername] = useState(user.username);
  const [room, setRoom] = useState(challenge.id);
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      const data = {
        room: room,
        author: username
      };
      socket.emit("join_room", data);
      setShowChat(true);
    }
  };
  
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
        <button onClick={joinRoom} className="btn btn-primary d-flex flex-column align-items-center mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><FontAwesomeIcon icon={faMessage} /> I am Chat!</button>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="App">
            {!showChat ? (
              <div className="joinChatContainer">
              </div>
            ) : (
              <Screen key = {room} socket={socket} username={username} room={room} />
            )}
          </div>

        </div>

      </section>
    </main>
  )
}