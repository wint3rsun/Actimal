import React from 'react';

const PetDetail = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='detailContainer'
      >
        <img src="https://placekitten.com/200/139" alt='#' />
        <div className='detailRight'>
          <p className='closeBtn' onClick={onClose}>
          <i class="fa fa-times-circle" aria-hidden="true"></i>
          </p>
          <div className='content'>
            <h1>Cat Lalalalala</h1>
            <p>Do you want to unlock this cats?</p>
            
            <p>This cat is amazing!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;