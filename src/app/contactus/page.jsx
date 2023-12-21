"use client";
import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function ContactUs() {
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const openModal = (message) => {
    setSuccessMessage(message);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1800);
  };
  const [post, setPost] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/contact",
        post
      );
      openModal("Message sent successfully!");

      console.log(response.data);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  }
  return (
    <>
      <div className={styles.ContactUs}>
        <h2>CONTACT</h2>
        <div className="container">
          <div className={`row ${styles.rowAll}`}>
            <div className="col-lg-5">
              <Image
                width={720}
                height={480}
                src="/assets/image/contactus.png"
                alt=""
              />
            </div>
            <div className="col-lg-7">
              <div className={styles.box}>
                <div className={styles.boxContent}>
                  <h3>Need assistance or have a question?</h3>
                  <div className={styles.pEdit}>
                    <p>
                       Feel free to contact us at BB Caviar for any inquiries or
                      assistance. Our team is always available and delighted to
                      support your caviar journey.
                    </p>
                    <div className={styles.contactInfo}>
                      <Image width={30} height={30} src="/assets/image/contactletter.png" alt="" />
                      <span>deluxecaviar@gmail.com</span>
                    </div>
                    <div className={styles.contactInfo}>
                      <Image width={30} height={30} src="/assets/image/contactphone.png" alt="" />
                      <span>+01 434 346 34 64 36</span>
                    </div>
                    <div className={styles.iconInfo}>
                      <Image width={30} height={30} src="/assets/image/contactinsta.png" alt="" />
                      <Image width={30} height={30} src="/assets/image/contactlinkedin.png" alt="" />
                      <Image width={30} height={30} src="/assets/image/contactcall.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.personalInfo}>
            <form onSubmit={handleSubmit} action="">
              <div className={`row ${styles.rowAll2}`}>
                <div className="col-lg-5">
                  <div className={styles.inputBox}>
                    <input
                      onChange={handleInput}
                      name="name"
                      value={post.name}
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
                      name="message"
                      value={post.message}
                      onChange={handleInput}
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
                      name="email"
                      value={post.email}
                      onChange={handleInput}
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
                      onChange={handleInput}
                      id="my1"
                      className={styles.input}
                      placeholder=""
                      type="text"
                      required
                      name="message"
                      value={post.message}
                    />
                    <label htmlFor="my1">Postal code</label>
                  </div>
                </div>
                <div className="col-lg-10">
                  <div className={styles.inputBoxMessage}>
                    <input
                      onChange={handleInput}
                      id="my2"
                      className={styles.input3}
                      placeholder=""
                      type="text"
                      required
                      name="message"
                      value={post.message}
                    />
                    <label className={styles.messageLabel} htmlFor="2">
                      Your message
                    </label>
                  </div>
                  <button className={styles.buttonHover}>Send Message</button>
                  {showModal && (
                    <div className={styles.modal}>
                      <div className={styles.modalContent}>
                        <svg
                          className={styles.checkIcon}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                        </svg>
                        <span>{successMessage}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.getInTouch}>
          <h2>Get in Touch with Us!</h2>
          <div className={styles.pEdit}>
            <p>
              Questions or thoughts about our caviar? Our BB Caviar team is
              ready to assist. Reach out to us for any inquiries or feedback –
              we're here to help and always eager to connect!
            </p>
          </div>
          <button className={styles.buttonHover}>Call us</button>
        </div>
      </div>
    </>
  );
}
