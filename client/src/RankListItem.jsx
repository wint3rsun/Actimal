import ProgressBar from "./pages/profile/ProgressBar";

export default function RankListItem({user, character, position, unit, max}) {
  return (
    <div className="item">
      <p className="position">{position}</p>
      <img src={character.avatar_url} alt={`player ${user.username}'s avatar`} className="avatar" />
      <p className="username">{user.username}</p>
      <ProgressBar unit={unit} max={max} current={user.progress} />
    </div>
  )
}