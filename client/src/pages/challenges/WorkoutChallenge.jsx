import { useState, useEffect, useRef } from "react";
import axios from "axios";

import TopNav from "../../TopNav";

const STATUS = {
  STARTED: 'Activity Started',
  STOPPED: 'Activity Stopped',
  COMPLETED: 'Activity Completed'
};

export default function Sandbox({user}) {
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

  const handleStop = () => {
    setStatus(STATUS.STOPPED)
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
    const savedCallback = useRef()
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback])
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    }, [delay])
  }

  const timer = useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1)
      } else {
        setStatus(STATUS.COMPLETED)
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
    e.playbackRate = 1.0;
    // e.addEventListener("mouseover", () => {
    //   handleStart();
    // });
    e.addEventListener("pause", () => {
      handleStop();
    });
    e.addEventListener("play", () => {
      handleStart();
    })
  }
  // 
  window.onbeforeunload = function() { 
    e.pause();
    handleStop(); 
    
    
    return "Your work will be lost."; };

  return (
    <>
      <TopNav onClick={handleClick}/>
      <h1>Activity</h1>
      <h2 className="">Status: {status}</h2>

      <main className="d-flex flex-column justify-content-between align-items-center">
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