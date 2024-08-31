import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faLink, faImages } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/Navigation.module.css";

export default function Navigation({ activeSection, setActiveSection }) {
  const navItems = [
    { icon: faHome, label: "Home" },
    { icon: faUser, label: "About" },
    { icon: faBriefcase, label: "Works" },
    { icon: faLink, label: "Links" },
    { icon: faImages, label: "Photos" }
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.label} className={styles.navItem}>
            <button
              className={`${styles.navLink} ${
                activeSection === item.label ? styles.active : ""
              }`}
              onClick={() => setActiveSection(item.label)}
              aria-label={item.label}
            >
              <span className={styles.navIcon}>
                <FontAwesomeIcon icon={item.icon} />
              </span>
              <span className={styles.navText}>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
