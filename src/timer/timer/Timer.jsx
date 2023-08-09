import { useEffect, useRef, useState } from "react";
import styles from "./timer.module.css";

export default function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const sessionStartTime = useRef(new Date()).current;

  const timeDiff = sessionStartTime
    ? currentTime.getTime() - sessionStartTime.getTime()
    : 0;

  const hours = Math.floor(timeDiff / 3600000);
  const minutes = Math.floor((timeDiff % 3600000) / 60000);
  const seconds = Math.floor(((timeDiff % 3600000) % 60000) / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.timer}>{`${hours < 10 ? `0${hours}` : `${hours}`}:${
      minutes < 10 ? `0${minutes}` : `${minutes}`
    }:${seconds < 10 ? `0${seconds}` : `${seconds}`}`}</div>
  );
}
