import styles from "./Header.module.css";
import { useState, useEffect } from "react";
const navItems = [
  { label: "Home", href: "#Home" },
  { label: "About", href: "#About" },
  { label: "Projects", href: "#Projects" },
  { label: "Contact", href: "#Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <div className={styles.logoContainer}>
          <h3>Nicolas.Lerch.dev</h3>
        </div>
        <div className={styles.navBar} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.label} className={styles.navItem}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
