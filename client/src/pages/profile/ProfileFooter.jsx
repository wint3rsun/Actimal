import ProgressBar from "./ProgressBar"
import QuickStats from "../../QuickStats"

export default function ProfileFooter({user}) {
  return (
    <footer className="d-flex flex-row justify-content-between align-items-center">
      <ProgressBar />
      <QuickStats user={user} />
    </footer>
  )
}