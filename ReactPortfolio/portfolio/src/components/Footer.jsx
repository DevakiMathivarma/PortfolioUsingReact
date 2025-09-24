import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`tw-footer ${styles.footer}`}>
      <div className={styles.inner}>
        <div>© {new Date().getFullYear()} Devaki Mathivarma</div>
        <div className="social-icons" aria-hidden>
          <a href="https://github.com/devakimathivarma" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
}
