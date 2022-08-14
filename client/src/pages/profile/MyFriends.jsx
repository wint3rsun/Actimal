import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useEffect,useState} from "react";
import { faUserPlus, faUserClock, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import SearchBar from "./SearchBar";
import axios from "axios";
import FollowersList from './FollowersList';

export default function MyFriends({user}) {
  console.log(user.username)
  const [Data, setData] = useState([]);
  const [Search, setSearch] = useState(false);
  const [Followers,setFollowers] = useState([]);
  // let Search=false;

  useEffect(() => {
    const usersURL = `http://localhost:8080/users`;

    axios.get(usersURL)
    .then((res) => {
      setData(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  }, []);
  
  useEffect(() => {
    const usersURL = `http://localhost:8080/followers/follower/${user.username}`;

    axios.get(usersURL)
    .then((res) => {
      console.log(res.data);
      setFollowers(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  }, []);

  return (
    <div>
      <div className='d-flex flex-row justify-content-around'>

        {/* <button onClick={()=>{setSearch(false)}} type='button' className='btn border-0' >
          <FontAwesomeIcon icon={faUserPlus}/>
          <p>Followed</p>
        </button> */}

        <button onClick={()=>{setSearch(false)}} type='button' className='btn position-relative border-0'>
          <FontAwesomeIcon icon={faUserClock}/>
          <p>My Followers</p>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {Followers.length}
            <span className="visually-hidden">Pending</span>
          </span>
        </button>


      <button onClick={()=>{console.log("button clicked");setSearch(true); console.log(Search);}} type='button' className='btn border-0'>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
        <p>Search User</p>
      </button>
      </div>
      
      {Search ? <div id = "search"> <SearchBar placeholder="Search User By Username..." data={Data} /> </div> :
     <FollowersList user={Followers}></FollowersList>}
    </div>
  )
}