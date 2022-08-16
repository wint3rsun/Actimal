import Background from "./Background";
import "./levelUp.scss";
import React, { Fragment, useState} from "react";
import Box from "../../assets/box.gif";
import Gift from "../../assets/gift-box.gif";

export default function LevelUp() {
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
        <p className="title">
        <h1 className="title"> Congratulations !!!</h1>
        You just Leveled up and Unlocked a new pet, 
        Please Go check it out! Great Job, keep working hard.
        </p> 
      </div>
      
      </div>}
    </Fragment>
    
  );
}