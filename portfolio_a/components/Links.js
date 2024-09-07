import { useState, useEffect, useRef } from "react";
import styles from "../styles/Links.module.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SiSignal } from "react-icons/si";
import EmailForm from "./EmailForm";

export default function Links() {
  const [displayedPeers, setDisplayedPeers] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const formRef = useRef(null);

  const header = "Links";
  const peersText = "Peers";

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/amCtrld" },
    { icon: <FaLinkedin />, url: "#" },
    { icon: <FaWhatsapp />, url: "https://wa.me/qr/66LR3TN4K3EWC1" },
    {
      icon: <SiSignal />,
      url: "https://signal.me/#eu/AtX2LiPQQiBvbjFx43FSH7JmI70FqYimW07u7GcUz7YOfxMD_ylMJZxWD4M-UmvQ",
    },
    { icon: <FaEnvelope />, onClick: () => setShowEmailForm(true) },
  ];

  const peerLinks = [{ name: "Nowayte", url: "https://se.nowayte.tech/" }];

  useEffect(() => {
    if (currentIndex < peersText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedPeers(
          (prevContent) => prevContent + peersText[currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 150);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex]);

  // Close the form when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowEmailForm(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formRef]);

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
            onClick={link.onClick}
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
            <a key={index} href={peer.url}>
              {peer.name}
            </a>
          ))}
        </div>
      </div>
      {showEmailForm && (
        <div className={styles.overlay}>
          <div ref={formRef} className={styles.formContainer}>
            <EmailForm closeForm={() => setShowEmailForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
