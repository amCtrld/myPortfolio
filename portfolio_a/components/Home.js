import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.motivationalStatement}>Turning Ideas into Reality</h1>
      <h2 className={styles.name}>Peter Mbugua</h2>
      <p className={styles.introduction}>
        JavaScript Developer | <span className={styles.alias}>Codmous</span>
      </p>
    </div>
  );
}