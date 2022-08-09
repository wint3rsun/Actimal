export default function QuickStats() {

  const props = { 
    user: {
      id: 1,
      username: "username1",
      password: "password",
      email: "username1@gmail.com",
      experience_points: 10,
      levels: 1,
      character: {
        id: 1,
        avatar_url: "https://robohash.org/340c525dec61deba2666cb58c149840e?set=set1&bgset=&size=400x400",
        charactor_model: "https://img.freepik.com/free-vector/athlete-doing-isolated_1308-38032.jpg?w=996&t=st=1659985157~exp=1659985757~hmac=26a86086e35a3e9dba3bf83ea41b604851f16693a03d025f6c5eb6633f23d0cf"
      }
    }
  }

  return (
    <section>
      <img className="rounded-circle" src={props.user.character.avatar_url} alt={`User ${props.user.username}'s avatar`} /> 
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.user.username}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{`Level: ${props.user.levels}`}</h6>
          <p className="card-text">Total Experience: <span>{props.user.experience_points}</span></p>
        </div>
      </div>
    </section>
  )
}