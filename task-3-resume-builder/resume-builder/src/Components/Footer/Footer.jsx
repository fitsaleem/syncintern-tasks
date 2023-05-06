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
              Hi, A passionate devOps engineer and Full Stack developer              </p>
            </div>
            </div>
            <div className={styles.col}>
            <div className={styles.card}>
              <h3>Quick Links</h3>
              <ul>
                <li><a href="https://github.com/fitsaleem" target="blank">GitHub</a></li>
                <li><a href="https://www.youtube.com/@fitcodding" target="blank">Youtube</a></li>
                <li><a href="https://www.linkedin.com/in/saleem-raza-3aa6b0204/" target="blank">Linkedin</a></li>
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