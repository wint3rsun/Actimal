import './App.css';
import { Link } from "react-router-dom"

function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/challenge">Invoices</Link> |{" "}
        <Link to="/dashboard">Invoices</Link> |{" "}
        <Link to="/myChallenges">Expenses</Link>
        <Link to="/myPets">Expenses</Link>
        <Link to="/profile">Expenses</Link>
      </nav>
    </div>
  );
}

export default App;
