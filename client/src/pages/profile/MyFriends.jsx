import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserClock, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function MyFriends() {

  return (
    <div>
      <div className='d-flex flex-row justify-content-around'>

        <button type='button' className='btn'>
          <FontAwesomeIcon icon={faUserPlus}/>
          <p>Add Friend</p>
        </button>

        <button type='button' className='btn position-relative'>
          <FontAwesomeIcon icon={faUserClock}/>
          <p>Pending Requests</p>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            5
            <span className="visually-hidden">Pending</span>
          </span>
        </button>

      <button type='button' className='btn'>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
        <p>Search Friends</p>
      </button>
      </div>
      <div className='d-flex flex-row justify-content-around'>
        <img className="rounded-circle" src="https://placekitten.com/200/139" alt="profile" />

        <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">Username 1</h5>
          <p className="card-text">Streak: 100 Days</p>
          <a href="#" className="btn btn-primary text-end">Go somewhere</a>
        </div>
      </div>
      </div>
    </div>
  )
}