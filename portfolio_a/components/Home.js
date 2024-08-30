import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import WeatherWidget from "./WeatherWidget";

export default function Home() {
  const [motivationalStatement] = useState(
    "To serve wholeheartedly,<br />to venture bravely and<br />to build with determination."
  );
  const [displayedStatement, setDisplayedStatement] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < motivationalStatement.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedStatement(
          (prevContent) => prevContent + motivationalStatement[currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, motivationalStatement]);

  return (
    <div className={styles.home}>
      <div className={styles.avatar}></div> {}
      <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteIconLeft} />
      <h3 className={styles.motivationalStatement}>
        <span dangerouslySetInnerHTML={{ __html: displayedStatement }} />
        <span className={styles.cursor}></span>
      </h3>
      <FontAwesomeIcon icon={faQuoteRight} className={styles.quoteIconRight} />
      <WeatherWidget />
    </div>
  );
}
