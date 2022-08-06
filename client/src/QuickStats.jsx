export default function QuickStats() {
  return (
    <section>
      <img className="rounded-circle" src="https://placekitten.com/200/139" alt="challenge" />
      
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Level: <span>1</span></p>
          <p className="card-text">Experience: <span>12000</span></p>
          <p className="card-text">Streak: <span>30 Days</span></p>
        </div>
      </div>
    </section>
  )
}