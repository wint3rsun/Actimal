import React from "react";

import "./ChallengeListItem.scss"

export default function ChallengeListItem({challenge, quest, onJoin, onShow, onRanking, onWorkout ,alreadyJoined, isRequiredLevel}) {
  const joinButtonClasses = alreadyJoined || !isRequiredLevel? "btn btn-secondary disabled" : "btn btn-primary";
  const viewableClasses = !isRequiredLevel? "disabled" : "";

  return (
    <section className="challenge-list-section d-flex flex-row">
      <img className="challenge-list-img" src={quest.img_url}alt="challenge" />
      <li className="card">
        <div className={`card-body`}>
          {isRequiredLevel && (
          <>
          <h5 className="card-title">{quest.name}</h5>
          <p className="card-text">{quest.description}</p>
          <p className="card-text">{`Start Date: ${challenge.start_date}`}</p>
          </>
          )}

          {!isRequiredLevel && (
            <>
            <h5 className="card-title">Your Level is too Low</h5>
            <p className="card-text">Please Level Up To See this Information</p>
            <p className="card-text">{`Start Date: When you level up!`}</p>
            </>
          )}

          <div className="d-flex flex-row justify-content-end">
            <a onClick={()=>onJoin(challenge.id)} className={`mx-2 ${joinButtonClasses}`}>Join</a>
            <a onClick={()=>onShow(challenge.id)} className={`btn btn-primary mx-2 ${viewableClasses}`}>See Details</a>
            {challenge.challenges_type === 'steps'? ( alreadyJoined && <a onClick={()=>onRanking(challenge)} className="btn btn-primary mx-2">See Ranking</a>)
            :( alreadyJoined && <a onClick={()=>onWorkout(challenge)} className="btn btn-primary mx-2">Workout</a>) 
            }
          </div>
          <br />
        </div>
      </li>
      <button id="challenge-detail-btn" type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></button>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">I am A Challenge Detail!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h1>Challenge Type</h1>
                <p>{quest.required_level}</p> 
              <p>
                goal: 10000,
                goal_units: "steps",
                required_level: 0,
                base_experience: 10,
                first_place_exp_bonus: 5,
                second_place_exp_bonus: 3,
                third_place_exp_bonus: 1
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={()=>onJoin(challenge.id)} type="button" className={joinButtonClasses}>Join</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}