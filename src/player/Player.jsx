import Stop from "./Stop";
import Play from "./Play";
import styles from "./player.module.css";
import { useState, useEffect, useRef } from "react";

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePress(isPlaying) {
    const newIsPlaying = isPlaying;
    if (newIsPlaying) {
      sound.current.play();
    } else {
      sound.current.pause();
    }
    setIsPlaying(newIsPlaying);
  }

  const sound = useRef(new Audio("src/assets/wave.mp3"));

  useEffect(() => {
    sound.current.loop = true;
  }, [sound.current]);

  useEffect(() => {
    const togglePlaying = function (e) {
      if (e.key === " ") {
        handlePress(!isPlaying);
      }
    };

    window.addEventListener("keydown", togglePlaying);

    return () => {
      window.removeEventListener("keydown", togglePlaying);
    };
  }, [isPlaying]);

  return (
    <div className={styles.playerBox}>
      <div
        className={styles.controlBtn}
        onClick={() => {
          handlePress(!isPlaying);
        }}
      >
        {isPlaying ? <Stop /> : <Play />}
      </div>
    </div>
  );
}
