import { useState, useEffect } from 'react';
import styles from '../styles/About.module.css';

export default function About() {
  const [aboutContent, setAboutContent] = useState('');
  const [displayedContent, setDisplayedContent] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/about.txt')
      .then(response => response.text())
      .then(text => setAboutContent(text))
      .catch(error => console.error('Error loading about content:', error));
  }, []);

  useEffect(() => {
    if (currentIndex < aboutContent.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedContent(prevContent => prevContent + aboutContent[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 30);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, aboutContent]);

  return (
    <div className={styles.about}>
      <h2>About Me</h2>
      <p className={styles.typingEffect}>{displayedContent}<span className={styles.cursor}></span></p>
    </div>
  );
}