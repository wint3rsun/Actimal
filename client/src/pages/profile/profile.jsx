import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileFooter from "./ProfileFooter";
import MyFriends from "./MyFriends";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./Profile.scss"

const ME = "ME"
const MYFRIENDS = "FRIENDLIST";

export default function Profile() {
  const user = {
    id: 1,
    username: "username1",
    password: "password",
    email: "username1@gmail.com",
    experience_points: 10,
    levels: 1,
    character: {
      id: 1,
      avatar_url: "https://robohash.org/340c525dec61deba2666cb58c149840e?set=set1&bgset=&size=400x400",
      charactor_model: "https://img.freepik.com/free-vector/athlete-doing-isolated_1308-38032.jpg?w=996&t=st=1659985157~exp=1659985757~hmac=26a86086e35a3e9dba3bf83ea41b604851f16693a03d025f6c5eb6633f23d0cf"
    }
  }

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
    <main className="profile-layout">
      <div className="border mt-3 px-3 py-1 position-relative">
      <button type="button" className="profile-btn btn-close" aria-label="Close" onClick={() => navigate(-1)}></button>
      <nav className="profile d-flex flex-row justify-content-around py-3">
        <p onClick={() => {openTab("me")}} id="me" className="tab active"><FontAwesomeIcon icon={faUser}/>Me</p>
        <p onClick={() => {openTab("my-friends")}} id="my-friends" className="tab"><FontAwesomeIcon icon={faUsers} />My Friends <span>222</span></p>
      </nav>
      {mode === ME && (
        <div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img className="profile-model-img" src={user.character.charactor_model} alt={`${user.username}'s character model`} />
            <p>{user.username}</p>
          </div>
          <ProfileFooter />
        </div>)}

      {mode === MYFRIENDS && (
        <div className="tab-item">
          <MyFriends />
        </div>)}

      </div>
    </main>
  );
}