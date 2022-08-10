import React, { useState } from 'react';
import PetDetail from "./PetDetail";
import "./Pet.scss";

export default function Pet(props) {

  const [openDetail, setOpenDetail] = useState(false);
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img width="100%" height="225" src={props.pet.avatar_url} alt={`${props.pet.name}'s animal avatar`} />
        <div className="card-body">
          <h2 className="card-text text-center">{props.pet.name}</h2>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
               <button onClick={() => setOpenDetail(true)} type="button" className="btn btn-sm btn-outline-secondary">View</button>
            </div>
            <small className="text-muted">some info</small>
          </div> 
        </div>
      </div> 
      <PetDetail
        open={openDetail}
        onClose={() => setOpenDetail(false)}
        pet={props.pet} />
    </div>
  )
}