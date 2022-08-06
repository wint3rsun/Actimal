import { Link } from "react-router-dom";
import TopNav from "../../TopNav";
import ChallengeListItem from "../../ChallengeListItem";
import QuickStats from "../../QuickStats";

export default function Dashboard() {
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