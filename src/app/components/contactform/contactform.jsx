import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
export default function ContactFm() {
  return (
    <>
      <div className={styles.ContactFm}>
        <div className={styles.large}></div>
        <div className={styles.overlay}></div>
        {/* <img src="./assets/image/contactphoto.png" alt="" /> */}
      </div>

      <section>
        <div className={styles.Large}>
          <div className={styles.contactBorder}>
            <h2 className="text-center">Get in Touch with Us!</h2>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="box">
                    <div className="left">
                      <img src="/assets/image/contactphoto1.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box">
                    <div className={styles.right}>
                      <form action="">
                        <div className={styles.inputBox}>
                          <input
                            id="my"
                            className={styles.input}
                            placeholder=""
                            type="text"
                            required
                          />
                          <label htmlFor="my">Your Name</label>
                        </div>
                        <div className={styles.inputBox}>
                          <input
                            id="my1"
                            className={styles.input}
                            placeholder=""
                            type="email"
                            required
                          />
                          <label htmlFor="my1">E-mail</label>
                        </div>
                        <div className={styles.inputBox}>
                          <input
                            id="my2"
                            className={styles.input3}
                            placeholder=""
                            type="text"
                            required
                          />
                          <label className={styles.messageLabel} htmlFor="2">
                            Your message
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/">
              <button>Send Message</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
