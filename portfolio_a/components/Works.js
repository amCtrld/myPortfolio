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
      title: "Mchango",
      description: "A digital platform to facilitate and manage charitable donations.",
      image: "../Images/mchango.png",
      link: "https://link-to-project1.com",
    },
    {
      id: 2,
      title: "Vitabu",
      description: "A social platform for book lovers to connect and share their passion.",
      image: "../Images/vitabu.w.png",
      link: "https://link-to-project2.com",
    },
    {
      id: 3,
      title: "Misuli",
      description: "A web application for managing gym operations and member data.",
      image: "../Images/Bed3.jpeg",
      link: "https://link-to-project3.com",
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
