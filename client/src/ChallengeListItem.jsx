import React from "react";

import "./ChallengeListItem.scss"

export default function ChallengeListItem({challenge, quest, onJoin, onShow, onRanking, onWorkout, alreadyJoined, isRequiredLevel}) {
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
          <p className="card-text">{`End Date: ${challenge.end_date}`}</p>
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
      <button id={`challenge-detail-btn${challenge.id}`} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target={`#staticBackdrop${challenge.id}`}></button>
      <div className="modal fade" id={`staticBackdrop${challenge.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Challenge Details!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h1>{quest.name}</h1>
                <p className="text-muted">Required Level: {quest.required_level}</p> 
                <p>{quest.description}</p>
                <h2>Challenge Info</h2>
              <p>
                Goal: {quest.goal} {quest.goal_units}<br/>
                Base EXP: {quest.base_experience}pts<br/>
                {quest.goal_units === 'steps' && `1st Place Bonus: ${quest.first_place_exp_bonus} pts`}<br/>
                {quest.goal_units === 'steps' && `2nd Place Bonus: ${quest.first_place_exp_bonus} pts`}<br/>
                {quest.goal_units === 'steps' && `3rd Place Bonus: ${quest.first_place_exp_bonus} pts`}
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