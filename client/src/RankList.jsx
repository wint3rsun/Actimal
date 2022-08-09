import ProgressBar from "./pages/profile/ProgressBar";
import RankListItem from "./RankListItem";

import "./RankList.scss"

export default function RankList(props) {
  const participants = [
      {
      id: 1,
      progress: "20.3",
      game_challenges_id: 1,
      users_id: {
        username: "username1",
        avatar_url: "https://robohash.org/340c525dec61deba2666cb58c149840e?set=set1&bgset=&size=400x400",
      }
      },
      {
      id: 3,
      progress: "50.0",
      game_challenges_id: 1,
      users_id: {
        username: "username2",
        avatar_url: "https://robohash.org/340c525dec61deba2666cb58c149840e?set=set2&bgset=&size=400x400"
      }
      },
      {
      id: 9,
      progress: "0.00",
      game_challenges_id: 1,
      users_id: {
        username: "username5",
        avatar_url: "https://robohash.org/340c525dec61deba2666cb58c149840e?set=set2&bgset=&size=400x400"
      }
      }
    ]
  return (
    <div className="ranking-container mx-5">
      <div className="top3">
        <div className="second item">
          <p className="position">2</p>
          <img src={participants[1].users_id.avatar_url} alt={`${participants[1].users_id.username}'s avatar`} className="avatar" />
          <p className="username">{participants[1].users_id.username}</p>
          <ProgressBar />
        </div>
        <div className="first item">
        <img src={participants[0].users_id.avatar_url} alt={`${participants[0].users_id.username}'s avatar`} className="avatar" />
          <p className="username">{participants[0].users_id.username}</p>
          <p className="username">WinterMoon</p>
          <ProgressBar />
        </div>
        <div className="third item">
          <p className="position">3</p>
          <img src={participants[2].users_id.avatar_url} alt={`${participants[2].users_id.username}'s avatar`} className="avatar" />
          <p className="username">{participants[2].users_id.username}</p>
          <ProgressBar />
        </div>
      </div>
      <div className="rank-list">

        <RankListItem position={4}/>
        <RankListItem position={5}/>
        <RankListItem position={6}/>
        <RankListItem position={7}/>
      </div>
    </div>
  )
}