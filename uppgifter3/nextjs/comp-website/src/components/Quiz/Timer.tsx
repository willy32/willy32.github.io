import React, { useEffect, useState } from 'react';

type TimerProps = {
    time: number,
    onNoTime: () => void
};

const Timer = ({time, onNoTime}: TimerProps) => {
    const [timer, setTimer] = useState(time ? time : -1);

    const resetTimer = () => {
      setTimer(time);
    }

    useEffect(() => {
        if(!time) return;
        const interval:NodeJS.Timer = setInterval(() => {
            setTimer(timer - 1);
        }, 1000);
        if(timer <= 0) {
          onNoTime();
          resetTimer()
        };
        return () => clearInterval(interval);
    }, [timer]);
  return (
    <p>
      {timer}
    </p>
  );
};

export default Timer;