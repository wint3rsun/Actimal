import React from 'react';

const PetDetail = ({ open, onClose }) => {
  const props = {
    pet: {
      id: 1,
      name: "Coolca",
      description: "Shes popular, energetic, witty and perhaps a little too uncontrolled. But whatd you expect from somebody with her position. She was born in an average family in a normal village. She lived free of worries until she was about 13 years old, but at that point things began to change. She did volunteering work and was learning a lot of new skills. Through plenty of trial and error, she managed to thrive in a fantastic world. But with her intrepidness and sense of humor, theres nothing to stop her from reaching full potential. She could quickly become a force to be reckoned with. Despite all this success, she is currently searching for a higher purpose. She feels like theres more secrets than answers in this world. Luckily she has a close group of friends to support her",
      avatar_url: "https://img.freepik.com/free-vector/cute-cool-cat-wearing-glasses-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-4268.jpg?w=1380&t=st=1659984340~exp=1659984940~hmac=03189393b79ea11880f7d0edd12ecf4ca3e0e47c126af239451f236ac0604c44",
      required_level: 0
    }
  }
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='detailContainer'
      >
        <img src={props.pet.avatar_url} alt={`animal ${props.pet.name}'s avatar`} />
        <div className='detailRight'>
          <p className='closeBtn' onClick={onClose}>
          <i className="fa fa-times-circle" aria-hidden="true"></i>
          </p>
          <div className='content'>
            <h1>{props.pet.name}</h1>
            <p>{`Unlocks at level ${props.pet.required_level}`}</p>
            
            <p>{props.pet.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;