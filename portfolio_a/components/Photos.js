import { useState, useEffect } from "react";
import styles from "../styles/Photos.module.css";

export default function Photos() {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [activePhoto, setActivePhoto] = useState(null);

  const photos = [
    { src: "../Images/Bed1.jpeg", alt: "Photo 1" },
    { src: "../Images/Bed2.jpeg", alt: "Photo 2" },
    { src: "../Images/Bed3.jpeg", alt: "Photo 3" },
    { src: "../Images/Bed4.jpeg", alt: "Photo 4" },
    { src: "../Images/Bed5.jpeg", alt: "Photo 5" },
    { src: "../Images/Bed1.jpeg", alt: "Photo 6" },
  ];

  useEffect(() => {
    const title = "Photos";
    if (currentTitleIndex < title.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedTitle((prevTitle) => prevTitle + title[currentTitleIndex]);
        setCurrentTitleIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [currentTitleIndex]);

  const handlePhotoClick = (index) => {
    setActivePhoto(activePhoto === index ? null : index);
  };

  return (
    <div className={styles.photos}>
      <h2 className={styles.typingEffect}>
        {displayedTitle}
        <span className={styles.cursor}></span>
      </h2>
      <div className={styles.photoGrid}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className={styles.photo}
            onClick={() => handlePhotoClick(index)}
          >
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
      <div
        className={`${styles.fullView} ${
          activePhoto !== null ? styles.show : ""
        }`}
        onClick={() => setActivePhoto(null)}
      >
        {activePhoto !== null && (
          <img src={photos[activePhoto].src} alt={photos[activePhoto].alt} />
        )}
      </div>
    </div>
  );
}
