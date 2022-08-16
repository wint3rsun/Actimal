import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import TopNav from "../../TopNav";

const STATUS = {
  STARTED: 'Activity Started',
  STOPPED: 'Activity Stopped',
  COMPLETED: 'Activity Completed'
};

export default function Sandbox({user, challenge, setState}) {
  const navigate = useNavigate();
  
  //const INITIAL_COUNT = 1057; //2 minutes in seconds
  const INITIAL_COUNT = 10; //testing time

  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [status, setStatus] = useState(STATUS.STOPPED);

  const handleClick = () => {
    alert("clicked!");
  }

  const handleStart = () => {
    setStatus(STATUS.STARTED);
  }

  const handleStop = (progress_time) => {
    setStatus(STATUS.STOPPED);

    const progress = {
      user_id: user.id,
      updata_progress: Number(progress_time).toFixed(2),
      id: challenge.id,
      type: 'workout'
    };

    console.log(progress);
    axios
    .put((`http://localhost:8080/participants/update_data`), { progress })
    .then((response) => {
     console.log("response",response);

    })
    .catch(err=>console.log(err));
  }

  const handleReset = () => {
    setStatus(STATUS.STOPPED)
    setSecondsRemaining(INITIAL_COUNT)
  }

  const handleComplete = () => {
    axios.put()
    .then((res) => {

    })
    .catch((err)=> {
      alert("whoops!");
    })


  }

  function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback])
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay])
  }

  const timer = useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.COMPLETED);
      }
    },
    status === STATUS.STARTED ? 1000 : null,
    // passing null stops the interval
  )

  //formating time display
  const seconds = secondsRemaining % 60
  const minutesRemaining = (secondsRemaining - seconds) / 60
  const minutes = minutesRemaining % 60;

  const e = document.getElementById('workout');
  if(e) {
    e.addEventListener("pause", () => {
      handleStop(e.currentTime);
    });
    e.addEventListener("play", () => {
      alert("started");
      handleStart();
    })
  }

  // window.onbeforeunload = function() { 
  //   e.pause();
  //   handleStop(e.currentTime); 
    
    
  //   return "Your work will be lost."; };

  return (
    <>
      <TopNav onClick={handleClick}/>
      <h1>Copy Activity</h1>
      <h2 className="">Status: {status}</h2>

      <main className="d-flex flex-column justify-content-between align-items-center position-relative">
        <button type="button" className="btn-close position-absolute" aria-label="Close" onClick={() => navigate(0)}></button>
        <div>
            {<p>Time Remaining: {minutes}:{seconds < 10 ?  `0${seconds}` : seconds} </p>}
            <button onClick={handleReset} type="button" className="btn btn-primary me-2">Reset</button>
            {secondsRemaining === 0 && <button onClick={handleComplete} type="button" className="btn btn-primary">Complete</button>}

        </div>
        <div>
          <div id="player-status">
              <video id="workout" width="853" height="500" controls>
                <source src="/Workouts/Miley_Cyrus_Workout.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>
          <div>
          </div>
        </div>
      </main>
    </>

    
  )
}