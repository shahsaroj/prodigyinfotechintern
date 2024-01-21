import React, { useState, useRef } from 'react';
import'./

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const pause = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timerRef.current);
    }
  };

  const restart = () => {
    pause();
    setTime(0);
  };

  const lap = () => {
    // Implement lap functionality here
    // You can use the current time value to store laps
    // For simplicity, let's just log the laps to the console
    console.log(`Lap: ${formatTime(time)}`);
  };

  return (
    <div>
      <div>{formatTime(time)}</div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={restart}>Restart</button>
      <button onClick={lap}>Lap</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Stopwatch />
    </div>
  );
}

export default App;
