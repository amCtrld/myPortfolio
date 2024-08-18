import styles from "../styles/Navigation.module.css";

export default function Navigation({ activeSection, setActiveSection }) {
  const navItems = ["Home", "About", "Works", "Links", "Photos"];

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item} className={styles.navItem}>
            <button
              className={`${styles.navLink} ${
                activeSection === item ? styles.active : ""
              }`}
              onClick={() => setActiveSection(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
