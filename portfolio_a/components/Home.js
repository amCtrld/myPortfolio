import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteIconLeft} />
      <h3 className={styles.motivationalStatement}>
        To serve wholeheartedly, to venture bravely <br /> and to build with
        determination.
      </h3>
      <FontAwesomeIcon icon={faQuoteRight} className={styles.quoteIconRight} />
    </div>
  );
}
