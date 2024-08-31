import { useState } from "react";
import { FaBars, FaHome, FaUser, FaBriefcase, FaLink, FaPhotoVideo } from "react-icons/fa";
import styles from "../styles/HamburgerMenu.module.css";

export default function HamburgerMenu({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "About", icon: <FaUser /> },
    { name: "Works", icon: <FaBriefcase /> },
    { name: "Links", icon: <FaLink /> },
    { name: "Photos", icon: <FaPhotoVideo /> },
  ];

  return (
    <div className={styles.hamburgerMenu}>
      <button onClick={toggleMenu} className={styles.hamburgerButton}>
        <FaBars />
      </button>
      {isOpen && (
        <div className={styles.menuOverlay}>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.name} className={styles.navItem}>
                  <button
                    className={`${styles.navLink} ${
                      activeSection === item.name ? styles.active : ""
                    }`}
                    onClick={() => {
                      setActiveSection(item.name);
                      toggleMenu(); // Close menu after selection
                    }}
                  >
                    {item.icon}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
