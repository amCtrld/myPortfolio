import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [motivationalStatement, setMotivationalStatement] = useState("To serve wholeheartedly, to venture bravely and to build with determination.");
  const [displayedStatement, setDisplayedStatement] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < motivationalStatement.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedStatement(prevContent => prevContent + motivationalStatement[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, motivationalStatement]);

  return (
    <div className={styles.home}>
      <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteIconLeft} />
      <h3 className={styles.motivationalStatement}>
        {displayedStatement}
        <span className={styles.cursor}></span>
      </h3>
      <FontAwesomeIcon icon={faQuoteRight} className={styles.quoteIconRight} />
    </div>
  );
}