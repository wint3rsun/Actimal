import "./ProgressBar.scss"

export default function ProgressBar({min, max, current, unit, children}) {
  const props = {
    min: 0,
    max: 100,
    current: 10,
    unit: 'EXP'
  }
  if(!min) {
    min = 0;
  }
  if(!max) {
    max = 0;
  }

  if(!current) {
    current = 0;
  }

  if(!unit) {
    unit = 'EXP'
  }
  return (
    <div className="progress-container d-flex flex-column px-2">
      {children && <h5 className="text-muted">{children}</h5>}
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={current} aria-valuemin={min} aria-valuemax={max} style={{width:`${current/max*100}%`}}></div>
      </div>
      <p>{`${unit}: ${current} / ${max}`}</p>
    </div>
  )
}