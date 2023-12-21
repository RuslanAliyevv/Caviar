"use client";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function ContactFm() {
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
      <div className={styles.ContactFm}>
        <div className={styles.large}></div>
        <div className={styles.overlay}></div>
        {/* <img src="./assets/image/contactphoto.png" alt="" /> */}
      </div>

      <section>
        <div className={styles.Large}>
          <div className={styles.contactBorder}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="box">
                    <div className="left">
                      <Image width={611} height={430} src="/assets/image/contactstock.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box">
                    <div className={styles.right}>
                      <form onSubmit={handleSubmit} action="">
                        <h2 className="text-start">Get in Touch with Us!</h2>
                        <div className={styles.inputBox}>
                          <input
                            onChange={handleInput}
                            name="name"
                            value={post.name}
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
                            onChange={handleInput}
                            name="email"
                            value={post.email}
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
                            onChange={handleInput}
                            name="message"
                            value={post.message}
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
                        <button className={styles.buttonHover}>
                          Send Message
                        </button>
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
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
