import { useState } from "react";
import styles from "../styles/Works.module.css";

export default function Works() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const worksData = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of project 1.",
      image: "../Images/Bed1.jpeg",
      link: "https://link-to-project1.com",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of project 2.",
      image: "../Images/Bed2.jpeg",
      link: "https://link-to-project2.com",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of project 3.",
      image: "../Images/Bed3.jpeg",
      link: "https://link-to-project3.com",
    },
  ];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.works}>
      <h2>Works</h2>
      <div className={styles.cardsContainer}>
        {worksData.map((work, index) => (
          <div
            key={work.id}
            className={`${styles.card} ${
              currentIndex === index ? styles.activeCard : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${work.image})` }}
              >
                <div className={styles.cardContent}>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
