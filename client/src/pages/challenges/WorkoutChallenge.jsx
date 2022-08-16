import { useState, useEffect, useRef } from "react";

import axios from "axios";

const STATUS = {
  STARTED: 'Activity Started',
  STOPPED: 'Activity Stopped',
  COMPLETED: 'Activity Completed'
};

const TIME_MARGIN_ERROR = {
  positive: 5,
  negative: -5
};

export default function Sandbox({user, quest, setState, challenge, userProgress, onComplete, toggle}) {  
  const initial = Number(quest.goal) - Math.round(Number(userProgress.progress));

  const [secondsRemaining, setSecondsRemaining] = useState(initial > 0 ? initial : 0);
  const [status, setStatus] = useState(STATUS.STOPPED);

  const handleStart = () => {
    setStatus(STATUS.STARTED);
  }

  const handleStop = (progress_time) => {
    setStatus(STATUS.STOPPED);

    const errorMargin =  Number(quest.goal) - secondsRemaining - Number(progress_time); 
    let confirmedProgress =  Number(quest.goal) - secondsRemaining;

    if(errorMargin < TIME_MARGIN_ERROR.positive && parseFloat(errorMargin) > parseFloat(TIME_MARGIN_ERROR.negative)) {
      confirmedProgress = Number(progress_time);
    };
    console.log(secondsRemaining);
    console.log(progress_time);
    console.log(confirmedProgress);
    console.log(errorMargin < TIME_MARGIN_ERROR.positive && parseFloat(errorMargin) > parseFloat(TIME_MARGIN_ERROR.negative))

    const progress = {
      user_id: user.id,
      updata_progress: confirmedProgress,
      id: userProgress.id,
      type: 'workout'
    };

    axios
    .put((`http://localhost:8080/participants/update_data`), { progress })
    .then((response) => {
      const userChallenges = response.data;
      setState((prev)=> ({
        ...prev,
        user_challenges: userChallenges
      }));

     console.log("response",response);
    })
    .catch(err=>console.log(err));
  }

  //timer logic
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

  useEffect(()=> {
    const e = document.getElementById('workout');
  if(e) {
    e.addEventListener("pause", () => {
      handleStop(e.currentTime);
    });
    e.addEventListener("play", () => {
      handleStart();
    });
    e.addEventListener("loadstart", ()=>{
      e.currentTime=userProgress.progress;
    });
    e.addEventListener("ended", () => {
      handleStop(quest.goal);
    })
  }

  },[secondsRemaining])

  return (
      <main className="d-flex flex-column justify-content-between align-items-center position-relative">
        <h1>Activity</h1>
        <h2 className="">Status: {status}</h2>
        <button type="button" className="btn-close position-absolute" aria-label="Close" onClick={()=>toggle()}></button>
        <div>
            {<p>Time Remaining: {minutes}:{seconds < 10 ?  `0${seconds}` : seconds} </p>}
            { secondsRemaining === 0 && <button onClick={()=>onComplete(userProgress.id)} type="button" className="btn btn-primary">Complete</button>}
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
  )
}