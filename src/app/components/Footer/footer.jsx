"use client";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const handleKoikomclick = () => {
    window.location.href = "https://www.koikom.com";
  };

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
                        <Image
                          loading="lazy"
                          width={26}
                          height={20}
                          src="/assets/image/vector.png"
                          alt=""
                        />
                      </Link>
                    </form>
                    <div className={styles.imgBorder}>
                      <Image
                        loading="lazy"
                        width={64}
                        height={44}
                        className={styles.imgPay}
                        src="/assets/image/applepay.png"
                        alt=""
                      />
                      <Image
                        loading="lazy"
                        width={64}
                        height={44}
                        className={styles.imgPay}
                        src="/assets/image/googlepay.png"
                        alt=""
                      />
                      <Image
                        loading="lazy"
                        width={64}
                        height={44}
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
                      <span className={styles.firstSpan}>Categories</span>
                    </div>
                    <div className={styles.linkEdit}>
                      <Link href="/productspage">
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
                      <span className={styles.firstSpan}>Our Policy</span>
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
                      <Link href="/aboutus">
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
                      <span className={styles.firstSpan}>Quick Links</span>
                    </div>
                    <div className={styles.linkEdit}>
                      <Link href="/aboutus">
                        <span>About</span>
                      </Link>
                    </div>
                    <div className={styles.linkEdit}>
                      <Link href="/productspage">
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
                      <span className={styles.firstSpan}>Contact</span>
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
                        {/* <Image
                          loading="lazy"
                          width={28}
                          height={28}
                          className={styles.imgIcon}
                          src="/assets/image/linkedingold.png"
                          alt=""
                        /> */}
                        <Image
                          loading="lazy"
                          width={28}
                          height={28}
                          className={styles.imgIcon}
                          src="/assets/image/facebookgold.png"
                          alt=""
                        />
                        <Image
                          loading="lazy"
                          width={28}
                          height={28}
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

              <div className={styles.flexy}>
                <div className={styles.box}>
                  <p>© Deluxe Caviar World. All rights reserved. </p>
                </div>
                <div className={styles.box}>
                  <div className={styles.h5Edit}>
                    <h5>Powered by </h5>
                    <Image
                      loading="lazy"
                      style={{ cursor: "pointer" }}
                      onClick={handleKoikomclick}
                      width={100}
                      height={16}
                      src="/assets/image/koikom.png"
                      alt=""
                    />
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
