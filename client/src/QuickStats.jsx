import "./QuickStats.scss"

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
    <section className="quickStat">
      <div className="item">
        <p className="username">{props.user.username}</p>
        <img src={props.user.character.avatar_url} alt="user profile" className="avatar" />
        <p className="text text-muted float-start">level 1</p>
        <p className="text">total experience: {props.user.experience_points} </p>
      </div>
    </section>
  )
}