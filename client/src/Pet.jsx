import React, { useState } from 'react';
import PetDetail from "./PetDetail";
import "./Pet.scss";
export default function Pet() {
  
  const [openDetail, setOpenDetail] = useState(false);
  return (
    <div class="col">
      <div class="card shadow-sm">
        <img width="100%" height="225" src="https://placekitten.com/200/139" alt="#" />
        <div class="card-body">
          <h2 class="card-text text-center">some name</h2>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button onClick={() => setOpenDetail(true)} className="detailButton" type="button" class="btn btn-sm btn-outline-secondary">View</button>
            </div>
            <small class="text-muted">some info</small>
          </div>
        </div>
      </div>
      <PetDetail
        open={openDetail}
        onClose={() => setOpenDetail(false)} />
    </div>
  )
}