import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
      <footer>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col}>
            <div className={styles.card}>
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            </div>
            <div className={styles.col}>
            <div className={styles.card}>
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            </div>
            <div className={styles.col}>
            <div className={styles.card}>
              <h3>Contact Us</h3>
              <p>
                123 Main Street<br />
                New York, NY 10001<br />
                Phone: (123) 456-7890<br />
                Email: info@example.com
              </p>
            </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer;