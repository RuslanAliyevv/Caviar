import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className={styles.Footer}>
        <div className="container">
          <div className={styles.boxUp}>
            <div className={`row ${styles.rowAll}`}>
              <div className="col-lg-4">
                <div className={styles.box}>
                  <div className={styles.boxContentFirst}>
                    <span className={styles.spanLogo1}>BB</span>
                    <span className={styles.spanLogo2}>Caviar</span>
                    <div className={styles.pEdit}>
                      <p>
                        All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined chunks as necessary, making this the
                        first true generator on the Internet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className={styles.box}>
                  <div className={styles.boxContent}>
                    <div className={styles.linkEdit}>
                      <Link href="/">
                        <span className={styles.firstSpan}>Quick Links</span>
                      </Link>
                    </div>
                    <div className={styles.linkEdit}>
                      <Link href="/aboutus">
                        <span>About</span>
                      </Link>
                    </div>
                    <div className={styles.linkEdit}>
                      <Link href="/">
                        <span>Products</span>
                      </Link>
                    </div>
                    <div className={styles.linkEdit}>
                      <Link href="/blogspage">
                        <span>Blogs</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className={styles.box}>
                  <div className={styles.boxContent}>
                    <div className={styles.linkEdit}>
                      <Link href="/">
                        <span className={styles.firstSpan}>Press</span>
                      </Link>
                    </div>
                    <div className={styles.linkEdit}>
                      <Link href="/terms">
                        <span>Terms & Conditions</span>
                      </Link>
                    </div>
                    <div className={styles.linkEdit}>
                      <Link href="/privacy">
                        <span>Privacy Policy</span>
                      </Link>
                    </div>
                    <div className={styles.linkEdit}>
                      <Link href="/faq">
                        <span>FAQ</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className={styles.box}>
                  <div className={styles.boxContent}>
                    <div className={styles.linkEdit}>
                      <Link href="/">
                        <span className={styles.firstSpan}>Contact</span>
                      </Link>
                    </div>
                    <div className={styles.linkEdit}>
                      <Link href="/">
                        <span>Phone: 24325242</span>
                      </Link>
                    </div>
                    <div className={styles.linkEdit}>
                      <Link href="/">
                        <span>caviar@email.com</span>
                      </Link>
                    </div>
                    <div className={styles.linkEdit}>
                      <Link href="/">
                        <span>Address: California</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.boxDown}>
            <div className={styles.boxDownContent}>
              <div className={styles.line}></div>
              <p>© Deluxe Caviar World. All rights reserved. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
