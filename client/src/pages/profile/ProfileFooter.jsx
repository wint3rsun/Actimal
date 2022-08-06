import ProgressBar from "./ProgressBar"
import ProfileStats from "./ProfileStats"

export default function ProfileFooter() {
  return (
    <footer className="d-flex flex-row justify-content-between align-items-center">
      <p className="d-flex flex-column">Level <span className="mx-auto">1</span></p>
      <ProgressBar />
      <ProfileStats />
    </footer>
  )
}