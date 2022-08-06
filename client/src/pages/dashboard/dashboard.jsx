import { Link } from "react-router-dom"

import ChallengeListItem from "../../ChallengeListItem";
import QuickStats from "./components/QuickStats";

export default function Dashboard() {
  return (
    <div>
      <h1>Final!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/profile">My Profile</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "} 
        <Link to="/myChallenges">My Challenges</Link> |{" "}
        <Link to="/myPets">My Pets</Link> |{" "}
      </nav>

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