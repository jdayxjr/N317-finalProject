"use client";
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>© 2024 Japan Fly. All rights reserved.</p>
        <nav>
          <ul className={styles.footerNav}>
            <li>
              <Link href="/contact" className={styles.footerLink}>Contact</Link>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" className={styles.footerLink}>Twitter</a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" className={styles.footerLink}>Facebook</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
