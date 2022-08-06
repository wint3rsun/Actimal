import { Link } from "react-router-dom"
import "./myChallenges.scss";
import ChallengeListItem from "../../ChallengeListItem";
import QuickStats from "../../QuickStats";
import TopNav from "../../TopNav";


export default function MyChallenges() {
  return (
    
    <div>
      <TopNav/>
      <div className="d-flex flex-row justify-content-between border">
        
        <div className="mx-5 my-5">
          <QuickStats />
        </div>

        <div className="mx-5 my-5">
          <ChallengeListItem />
          <ChallengeListItem />
          <ChallengeListItem />
        </div>
      </div>




    </div>
  );
}