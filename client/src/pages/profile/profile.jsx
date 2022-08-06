import { useState } from "react";

import { useNavigate } from "react-router-dom";
import ProfileFooter from "./ProfileFooter";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./Profile.scss"

const ME = "ME"
const MYFRIENDS = "FRIENDLIST";

export default function Profile() {
  const [mode, setMode] = useState(ME);

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
    <main className="layout d-flex flex-column justify-content-around mx-5 my-3 px-2 border">
      <button type="button" className="btn-close" aria-label="Close" onClick={() => navigate(-1)}></button>
      <nav className="profile d-flex flex-row justify-content-around">
        <p onClick={() => {openTab("me")}} id="me" className="tab active"><FontAwesomeIcon icon={faUser}/>Me</p>
        <p onClick={() => {openTab("my-friends")}} id="my-friends" className="tab"><FontAwesomeIcon icon={faUsers} />My Friends <span>222</span></p>
      </nav>
      {mode === ME && (
        <div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src="https://cdn.iconscout.com/icon/free/png-256/woman-female-person-avatar-user-31835.png" alt="profile" />
            <p>Username: Wint3rSun</p>
          </div>
          <ProfileFooter />
        </div>)}

      {mode === MYFRIENDS && (
        <div className="tab-item">
          <p>My friends list</p>
        </div>)}
    </main>
  );
}