import { useState, useEffect } from 'react';
import styles from '../styles/Links.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiSignal } from 'react-icons/si';

export default function Links() {
  const [displayedPeers, setDisplayedPeers] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const header = "Links";
  const peersText = "Peers";

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <SiSignal />, url: 'https://signal.org/yourusername' },
    { icon: <FaEnvelope />, url: 'mailto:your.email@example.com' },
  ];

  const peerLinks = [
    { name: 'Bravo', url: '#' },
    { name: 'Alpha', url: '#' },
    { name: 'Zulu', url: '#' },
  ];

  useEffect(() => {
    if (currentIndex < peersText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedPeers(prevContent => prevContent + peersText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 150);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex]);

  return (
    <div className={styles.links}>
      <h2>Links</h2>
      <div className={styles.socialLinks}>
        {socialLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.icon}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className={styles.peers}>
        <h2>
          {displayedPeers}
          <span className={styles.cursor}></span>
        </h2>
        <div className={styles.peerLinks}>
          {peerLinks.map((peer, index) => (
            <a key={index} href={peer.url}>{peer.name}</a>
          ))}
        </div>
      </div>
    </div>
  );
}