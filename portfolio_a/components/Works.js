import { useState } from "react";
import styles from "../styles/Works.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Works() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const worksData = [
    {
      id: 1,
      title: "Nijue",
      description: "nijue lets professionals share their story through a timeline, video, and AI-powered summary",
      image: "../Images/nijue.png",
      link: "https://nijue.vercel.app",
    },
    {
      id: 2,
      title: "BowlRMS",
      description: "A modern Restaurant management and digital menu system",
      image: "../Images/bowl.png",
      link: "https://bowlrms.com",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === worksData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? worksData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.works}>
      <h2>Works</h2>
      <div className={styles.slideshowContainer}>
        <button className={styles.navButton} onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.card}>
          <a
            href={worksData[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={styles.cardImage}
              style={{
                backgroundImage: `url(${worksData[currentIndex].image})`,
              }}
            >
              <div className={styles.cardContent}>
                <h3>{worksData[currentIndex].title}</h3>
                <p>{worksData[currentIndex].description}</p>
              </div>
            </div>
          </a>
        </div>
        <button className={styles.navButton} onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
