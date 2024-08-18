import { useState, useEffect } from "react";
import styles from "../styles/Works.module.css";

export default function Works() {
  const [message, setMessage] = useState("Coming soon");
  const [displayedMessage, setDisplayedMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < message.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedMessage(
          (prevContent) => prevContent + message[currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 150); // Adjust this value to control typing speed

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, message]);

  return (
    <div className={styles.works}>
      <h2>Works</h2>
      <p className={styles.message}>
        {displayedMessage}
        <span className={styles.cursor}></span>
      </p>
    </div>
  );
}
