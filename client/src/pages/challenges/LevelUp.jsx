import Background from "./Background";
import "./levelUp.scss";
import React, { Fragment, useState} from "react";
import Box from "../../assets/box.gif";
import Gift from "../../assets/gift-box.gif";

export default function LevelUp({user}) {
  const [Alert,setAlert]=useState(true);
  setTimeout(() => {
    setAlert(false);
  }, 4200);

  return (
    <Fragment > 
      <Background></Background>
      {Alert ? <img className="center gift" src={Gift} alt= "" /> :
      <div className="center outbox">
      <div className="left">
        <img className="cat" src={Box} alt= "" />
      </div>
      <div className="right">
        <div className="title">
        <h1 className="title"> Congratulations {user.name}!!!</h1>
        You've just leveled up to {user.level} and Unlocked a new pet, 
        Please Go check it out! Great Job, keep working hard.
        </div> 
      </div>
      
      </div>}
    </Fragment>
    
  );
}