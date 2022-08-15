import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ProfileFooter from "./ProfileFooter";
import MyFriends from "./MyFriends";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./Profile.scss"

const ME = "ME"
const MYFRIENDS = "FRIENDLIST";

export default function Profile({user, characters, levels, flag}) {
  const [mode, setMode] = useState(ME);

  const character = characters[user.character_id];
  user["character"] = character;

  const navigate = useNavigate();

  function openTab(tabName) {
    const tabs = document.getElementsByClassName("tab");
    for (const tab of tabs) {
      tab.classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");

    if (tabName === "me") {
      setMode(ME)
    }

    if (tabName === "my-friends") {
      setMode(MYFRIENDS)
    }
  }

  return (
    <main className="profile-layout">
      {flag && <>
      <div className="border mt-3 position-relative">
      <button type="button" className="profile-btn btn-close" aria-label="Close" onClick={() => navigate(-1)}></button>
      <nav className="profile d-flex flex-row justify-content-around py-3" >
        <p onClick={() => {openTab("me")}} id="me" className="tab active"><FontAwesomeIcon icon={faUser}/>Me</p>
        <p onClick={() => {openTab("my-friends")}} id="my-friends" className="tab"><FontAwesomeIcon icon={faUsers} />Followers </p>
      </nav>
      {mode === ME && (
        <div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img className="profile-model-img" src={character.charactor_model} alt={`${user.username}'s character model`} />
            <p>{user.username}</p>
          </div>
          <ProfileFooter user={user} level={levels[user.level]} />
        </div>)}

      {mode === MYFRIENDS && (
        <div className="tab-item">
          <MyFriends user = {user}/>
        </div>)}
      </div>
      </>}

    </main>
  );
}