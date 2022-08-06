import ProgressBar from "./pages/profile/ProgressBar";
import RankListItem from "./RankListItem";

import "./RankList.scss"

export default function RankList(props) {
  return (
    <div className="ranking-container mx-5">
      <div className="top3">
        <div className="second item">
          <p className="position">2</p>
          <img src="https://i.pravatar.cc/400?img=62" alt="user profile" className="avatar" />
          <p className="username">WinterSun</p>
          <ProgressBar />
        </div>
        <div className="first item">
          <p className="position">1</p>
          <img src="https://i.pravatar.cc/400?img=16" alt="user profile" className="avatar" />
          <p className="username">WinterMoon</p>
          <ProgressBar />
        </div>
        <div className="third item">
          <p className="position">3</p>
          <img src="https://i.pravatar.cc/400?img=2" alt="user profile" className="avatar" />
          <p className="username">WinterLand</p>
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