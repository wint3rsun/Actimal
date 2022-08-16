
export default function Follower({user}) {
  
  return (
    <div className="item">
      <img src={user.avatar_url} alt={`player ${user.username}'s avatar`} className="avatar" />
      <p className="username">{user.username}</p>
      <button type="button" className="btn btn-danger mx-5">Remove</button>
    </div>
  )
}