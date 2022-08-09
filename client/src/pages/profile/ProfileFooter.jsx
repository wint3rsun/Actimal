import ProgressBar from "./ProgressBar"
import QuickStats from "../../QuickStats"

export default function ProfileFooter() {
  return (
    <footer className="d-flex flex-row justify-content-between align-items-center">
      <ProgressBar />
      <QuickStats />
    </footer>
  )
}