import Navigation from './Navigation';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, activeSection, setActiveSection }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftHalf}>
        <div className={styles.alias}>amCtrld</div>
        <main className={styles.content}>{children}</main>
      </div>
      <div className={styles.rightHalf}>
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className={styles.photo}></div>
      </div>
    </div>
  );
}