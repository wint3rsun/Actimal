import { useNavigate } from "react-router-dom";

import ProgressBar from "./pages/profile/ProgressBar"
import RankList from "./RankList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

import "./Challenge.scss"


export default function Challenge(props) {
  const navigate = useNavigate();

  return (
    <main className="challenge position-relative">
      <button type="button" className="btn-close position-absolute" aria-label="Close" onClick={() => navigate(0)}></button>
      <section className="challenge-header mt-5">
        <h1>I am a Challenge!</h1>
        <h2>Leaderboard</h2>
        <ProgressBar />
      </section>

      <section className="position-relative">
        <RankList />
      </section>

      <section className="d-flex flex-row-reverse mb-3">
        <button className="btn btn-primary d-flex flex-column align-items-center mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><FontAwesomeIcon icon={faMessage}/> I am Chat!</button>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
            </div>
            <div className="dropdown mt-3">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                Actions
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}