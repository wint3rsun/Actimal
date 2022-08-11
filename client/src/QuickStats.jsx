import "./QuickStats.scss"

export default function QuickStats({user}) {

  // const user = {
  //   id: 4,
  //   username: "username4",
  //   email: "username4@gmail.com",
  //   experience_points: 30,
  //   level: 3,
  //   character: {
  //     id: 1,
  //     avatar_url: "https://robohash.org/340c525dec61deba2666cb58c149840e?set=set1&bgset=&size=400x400",
  //     charactor_model: "https://img.freepik.com/free-vector/athlete-doing-isolated_1308-38032.jpg?w=996&t=st=1659985157~exp=1659985757~hmac=26a86086e35a3e9dba3bf83ea41b604851f16693a03d025f6c5eb6633f23d0cf"
  //   }
  // }

  return (
    <section className="quickStat">
      <div className="item">
        <p className="username">{user.username}</p>
        <img src={user.character.avatar_url} alt="user profile" className="avatar" />
        <p className="text text-muted float-start">Level: {user.level}</p>
        <p className="text">Total Experience: {user.experience_points} </p>
      </div>
    </section>
  )
}