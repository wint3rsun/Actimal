import ProgressBar from "./pages/profile/ProgressBar";

export default function RankListItem(props) {
  return (
    <div className="item">
      <p className="position">{props.position}</p>
      <img src="https://i.pravatar.cc/400?img=12" alt="player avatar" className="avatar" />
      <p className="username">Username A</p>
      <ProgressBar />
    </div>
  )
}