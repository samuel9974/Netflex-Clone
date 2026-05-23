import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

/**
 * Renders the site footer with social links, navigation columns, and copyright.
 * Takes no parameters.
 * @returns {import('react').ReactElement} - The footer markup; not null.
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Social media icons */}
        <ul className={styles.socialList} aria-label="Social media">
          <li>
            <a
              href="https://facebook.com/netflix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={styles.socialLink}
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/netflix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.socialLink}
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/netflix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className={styles.socialLink}
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/netflix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className={styles.socialLink}
            >
              <FaYoutube />
            </a>
          </li>
        </ul>

        {/* Link columns */}
        <nav className={styles.linksGrid} aria-label="Footer">
          {/* Column 1 */}
          <ul className={styles.linkColumn}>
            <li>
              <a href="#" className={styles.link}>
                Audio Description
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Legal Notices
              </a>
            </li>
          </ul>

          {/* Column 2 */}
          <ul className={styles.linkColumn}>
            <li>
              <a href="#" className={styles.link}>
                Help Centre
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Cookie Preferences
              </a>
            </li>
          </ul>

          {/* Column 3 */}
          <ul className={styles.linkColumn}>
            <li>
              <a href="#" className={styles.link}>
                Gift Cards
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Corporate Information
              </a>
            </li>
          </ul>

          {/* Column 4 */}
          <ul className={styles.linkColumn}>
            <li>
              <a href="#" className={styles.link}>
                Media Centre
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className={styles.copyright}>© 1997-2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
