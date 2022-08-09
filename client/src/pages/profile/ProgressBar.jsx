import "./ProgressBar.scss"

export default function ProgressBar() {
  const props = {
    min: 0,
    max: 100,
    current: 10,
    unit: 'EXP'
  }
  return (
    <div className="progress-container d-flex flex-column">
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={props.current} aria-valuemin={props.min} aria-valuemax={props.max} style={{width:`${props.current/props.max*100}%`}}></div>
      </div>
      <p>{`${props.unit}: ${props.current} / ${props.max}`}</p>
    </div>
  )
}