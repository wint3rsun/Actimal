import React, { useState } from 'react';
import "./unlockPets.scss";

export default function UnlockPet(props) {

  const [openDetail, setOpenDetail] = useState(false);
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img className= "unlock" width="100%" height="225" src={props.pet.avatar_url} alt={`${props.pet.name}'s animal avatar`} />
        <div className="card-body">
          <h2 className="card-text text-center unlock">{props.pet.name}</h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="alert alert-danger" role="alert">
            Need Level {props.pet.required_level} To Unlock
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}