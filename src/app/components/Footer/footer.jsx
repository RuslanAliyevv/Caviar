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
              <div className="col-lg-3">
                <div className={styles.box}>
                  <div className={styles.boxContentFirst}>
                    <div className={styles.pEdit}>
                      <p>
                        Delight in the epitome of pure, unmatched, and exquisite
                        luxury caviar. Taste the perfection today!
                      </p>
                    </div>

                    <h5>Subscribe now</h5>
                    <form action="">
                      <div className={styles.inputBox}>
                        <input
                          name="name"
                          id="my"
                          className={styles.input}
                          placeholder=""
                          type="text"
                          required
                        />
                        <label htmlFor="my">Email</label>
                      </div>
                     <Link className={styles.imgVector} href="/">
                     <img src="/assets/image/vector.png" alt="" />
                     </Link>
                    </form>
                    <div className={styles.imgBorder}>
                      <img
                        className={styles.imgPay}
                        src="/assets/image/applepay.png"
                        alt=""
                      />
                      <img
                        className={styles.imgPay}
                        src="/assets/image/googlepay.png"
                        alt=""
                      />
                      <img
                        className={styles.imgPay}
                        src="/assets/image/shoppay.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className={styles.box}>
                  <div className={styles.boxContent}>
                    <div className={styles.linkEdit}>
                      <Link href="/">
                        <span className={styles.firstSpan}>Categories</span>
                      </Link>
                    </div>
                    <div className={styles.linkEdit}>
                      <Link href="/aboutus">
                        <span>Caviar</span>
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
                        <span className={styles.firstSpan}>Our Policy</span>
                      </Link>
                    </div>
                    <div className={styles.linkEdit}>
                      <Link href="/aboutus">
                        <span>Order & Shipping</span>
                      </Link>
                    </div>
                    <div className={styles.linkEdit}>
                      <Link href="/">
                        <span>Return & Exchanges</span>
                      </Link>
                    </div>
                    <div className={styles.linkEdit}>
                      <Link href="/blogspage">
                        <span>Cancellations</span>
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
                    <div className={styles.linkEdit}>
                      <Link href="/">
                        <span>W/h: 09:00 - 18:00</span>
                      </Link>
                    </div>
                    <div className={styles.linkEdit}>
                      <div>
                        <img
                          className={styles.imgIcon}
                          src="/assets/image/linkedingold.png"
                          alt=""
                        />
                        <img
                          className={styles.imgIcon}
                          src="/assets/image/facebookgold.png"
                          alt=""
                        />
                        <img
                          className={styles.imgIcon}
                          src="/assets/image/instagramgold.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.boxDown}>
            <div className={styles.boxDownContent}>
              <div className={styles.line}></div>

              <div className={styles.flex}>
                <div className={styles.box}>
                  <p>© Deluxe Caviar World. All rights reserved. </p>
                </div>
                <div className={styles.box}>
                  <div className={styles.h5Edit}>
                  <h5>Powered by </h5>
                  <img src="/assets/image/koikom.png" alt="" />
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
