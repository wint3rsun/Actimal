import { useState } from "react";

import "./myChallenges.scss";
import ChallengeListItem from "../../ChallengeListItem";
import QuickStats from "../../QuickStats";
import TopNav from "../../TopNav";
import Footer from "../../Footer";
import Challenge from "../../Challenge";


const SHOW_ALL = "SHOW_ALL";
const SHOW_ONE = "SHOW_ONE";

export default function MyChallenges() {
  const [mode, setMode] = useState(SHOW_ALL);

  const show = () => {
    setMode(SHOW_ONE);
  }

  const join = () => {
    alert("clicked join");
  }

  return (
    
    <div>
      <TopNav/>

      {
      mode === SHOW_ALL && (
        <div className="d-flex flex-row justify-content-between border">
          <div className="mx-5 my-5">
            <QuickStats />
          </div>

          <div className="mx-5 my-5">
            <ChallengeListItem onShow={show} onJoin={join}/>
            <ChallengeListItem  onShow={show} onJoin={join}/>
            <ChallengeListItem  onShow={show} onJoin={join}/>
          </div>
        </div>
      )}
      {
        mode === SHOW_ONE && (
          <div className="d-flex flex-row justify-content-between border">
            <Challenge />
          </div>
      )}

      <Footer/>
    </div>
  );
}