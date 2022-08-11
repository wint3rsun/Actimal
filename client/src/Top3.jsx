import ProgressBar from "./pages/profile/ProgressBar"

const FIRST = "first order-2";
const SECOND = "second order-1";
const THIRD = "third order-3";

export default function Top3({user, position, character, unit, max}) {
  let placeClass = "";
  if(position === 1) placeClass = FIRST;
  if(position === 2) placeClass = SECOND;
  if(position === 3) placeClass = THIRD;

  return(
    <div className={`${placeClass} item`}>
      <p className="position">{position}</p>
      <img src={character.avatar_url} alt={`${user.username}'s avatar`} className="avatar" />
      <p className="username">{user.username}</p>
      <ProgressBar unit={unit} max={max} current={user.progress} />
    </div>
  )
}