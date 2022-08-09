import React from "react";

import "./ChallengeListItem.scss"

export default function ChallengeListItem(props) {

  return (
    <section className="challenge-list-section d-flex flex-row">
      <img className="challenge-list-img" src={props.challenge.img_url}alt="challenge" />
      <li className="card">
        <div className="card-body">
          <h5 className="card-title">{props.challenge.name}</h5>
          <p className="card-text">{props.challenge.description}</p>
          <p className="card-text">{`Start Date: ${props.challenge.start_date}`}</p>
          <div className="d-flex flex-row justify-content-end">
            {props.isJoined && <a onClick={props.onJoin} className="btn btn-primary mx-2">Join</a>}
            <a onClick={props.onShow} className="btn btn-primary mx-2">See Details</a>
          </div>
          <br />
        </div>
      </li>
    </section>
  );
}