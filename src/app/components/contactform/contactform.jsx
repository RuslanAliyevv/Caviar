"use client";

import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
export default function ContactFm() {
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
      // Send the request to the Next.js API route
      const response = await axios.post(
        "http://localhost:3000/api/contact",
        post
      );
      console.log(response.data); // Handle the response
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
                      <form onSubmit={handleSubmit} action="">
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
