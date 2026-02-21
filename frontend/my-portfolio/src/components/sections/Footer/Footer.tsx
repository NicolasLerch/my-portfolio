import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section id="footer" className={styles.section}>
      <div className={styles.inner}>
          <div className={styles.copyright}>
            <p>&copy; 2026 Nicolas Lerch. All rights reserved</p>
          </div>
          <div className={styles.links}>
            <a
              href="https://github.com/NicolasLerch"
              target="_blank"
              className={styles.link}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-lerch/"
              target="_blank"
              className={styles.link}
            >
              LinkedIn
            </a>
            <a
              href="mailto:lerchnicolas@hotmail.com"
              target="_blank"
              className={styles.link}
            >
              Email
            </a>
          </div>
      </div>
    </section>
  );
}
