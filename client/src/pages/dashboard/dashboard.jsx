import { Link } from "react-router-dom"

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
    </div>
  );
}