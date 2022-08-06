import "./ProgressBar.scss"

export default function ProgressBar() {
  return (
    <div className="progress-container d-flex flex-column">
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:"40%"}}></div>
      </div>
      <p>EXP: 400 / 1000</p>
    </div>
  )
}