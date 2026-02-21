import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="Home" className={styles.section}>
      <div className={styles.backgroundGrid}>
        <div className={styles.content}>
          <p className={styles.tagline}>Full-Stack Developer</p>
          <h1 className={styles.heading}>
            Building thoughtful software with clarity and purpose
          </h1>
          <p className={styles.subheading}>
            I design and build full-stack applications that are structured,
            maintainable, and grounded in real-world problem solving. Clean
            architecture, no shortcuts.
          </p>
        </div>
      </div>
    </section>
  );
}
