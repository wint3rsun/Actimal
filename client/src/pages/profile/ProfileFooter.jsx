import ProgressBar from "./ProgressBar"
import QuickStats from "../../QuickStats"

export default function ProfileFooter({user, level}) {
  return (
    <footer className="d-flex flex-row justify-content-between align-items-center">
      <ProgressBar current={user.experience_points} min={level.min} max={level.max}>Experience to Next Level</ProgressBar>
      <QuickStats user={user} />
    </footer>
  )
}