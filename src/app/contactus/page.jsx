import React from "react";
import styles from "./styles.module.css";
export default function ContactUs() {
  return (
    <>
      <div className={styles.ContactUs}>
        <h2>contact</h2>
        <div className="container">
          <div className={`row ${styles.rowAll}`}>
            <div className="col-lg-5">
              <img src="/assets/image/contactus.png" alt="" />
            </div>
            <div className="col-lg-7">
              <div className={styles.box}>
                <div className={styles.boxContent}>
                  <h3>It is a long caviar established fact reader</h3>
                  <div className={styles.pEdit}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                    <div className={styles.contactInfo}>
                      <img src="/assets/image/contactletter.png" alt="" />
                      <span>deluxecaviar@gmail.com</span>
                    </div>
                    <div className={styles.contactInfo}>
                      <img src="/assets/image/contactphone.png" alt="" />
                      <span>+01 434 346 34 64 36</span>
                    </div>
                    <div className={styles.iconInfo}>
                      <img src="/assets/image/contactinsta.png" alt="" />
                      <img src="/assets/image/contactlinkedin.png" alt="" />
                      <img src="/assets/image/contactcall.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.personalInfo}>
            <form action="">
              <div className={`row ${styles.rowAll2}`}>
                <div className="col-lg-5">
                  <div className={styles.inputBox}>
                    <input
                      id="my1"
                      className={styles.input}
                      placeholder=""
                      type="text"
                      required
                    />
                    <label htmlFor="my1">Your name</label>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className={styles.inputBox}>
                    <input
                      id="my1"
                      className={styles.input}
                      placeholder=""
                      type="phone"
                      required
                    />
                    <label htmlFor="my1">Phone number</label>
                  </div>
                </div>
                <div className="col-lg-5">
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
                </div>
                <div className="col-lg-5">
                  <div className={styles.inputBox}>
                    <input
                      id="my1"
                      className={styles.input}
                      placeholder=""
                      type="text"
                      required
                    />
                    <label htmlFor="my1">Postal code</label>
                  </div>
                </div>
                <div className="col-lg-10">
                  <div className={styles.inputBoxMessage}>
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
                  <button>Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.getInTouch}>
          <h2>Get in Touch with Us!</h2>
          <div className={styles.pEdit}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          <button>Call us</button>
        </div>
      </div>
    </>
  );
}
