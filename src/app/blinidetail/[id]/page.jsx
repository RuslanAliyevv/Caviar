"use client"

import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";
export default function BliniDetail() {
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
      // name: "",
      email: "",
      message: "",
      contact_type : 'Receipt',
    });
    const handleInput = (event) => {
      setPost({ ...post, [event.target.name]: event.target.value });
    };
    async function handleSubmit(event) {
      event.preventDefault();
      try {
        const response = await axios.post(
          "http://68.183.53.2:3000/contacts",
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
      <div className={styles.BliniDetail}>
        <h2>Omelet with Pressed Caviar and Sour Cream</h2>
        <div className="container">
          <div className={styles.ingredient}>
            <h3>Ingredients</h3>
            <p>- 3 tablespoons pressed caviar (3 ounces)</p>
            <p>- 2 tablespoons sour cream</p>
            <p>- 1 tablespoon minced chives</p>
            <p>- 2 large eggs</p>
            <p>- Salt and freshly ground pepper</p>
            <p>- 1 tablespoon unsalted butter</p>
          </div>
          <div className={styles.content}>
            <h4>Directions</h4>
            <h5>Step 1</h5>
            <p>
              Roll out the caviar between two sheets of plastic wrap to a
              5-by-8-inch rectangle 1/8 inch thick. Cut half of it into 1/2-inch
              strips. Finely dice the remaining caviar and transfer to a small
              bowl. Stir in the sour cream and all but a pinch of the chives.
            </p>
            <h5>Step 2</h5>
            <p>
              Roll out the caviar between two sheets of plastic wrap to a
              5-by-8-inch rectangle 1/8 inch thick. Cut half of it into 1/2-inch
              strips. Finely dice the remaining caviar and transfer to a small
              bowl. Stir in the sour cream and all but a pinch of the chives.
            </p>
            <h5>Step 3</h5>
            <p>
              In a small bowl, beat the eggs until frothy and season with salt
              and pepper. In a 6-inch nonstick skillet, melt the butter over
              high heat until the foam subsides. Add the eggs and stir
              constantly with a heatproof rubber spatula, while shaking the
              skillet, until the eggs are set but still moist.
            </p>
            <h5>Step 4</h5>
            <p>
              Off the heat, dollop the sour cream mixture across the center of
              the eggs. Shake the skillet to loosen the omelet, then fold
              one-third of the eggs over the filling. Tilt the skillet and turn
              the omelet onto a plate, folding it over itself as you tilt.
              Garnish with the caviar strips, sprinkle with the remaining chives
              and serve right away.
            </p>
          </div>
          <div className={styles.imgBox}>
            <img src="/assets/image/blinidetailphoto.png" alt="" />
          </div>
          <div className={styles.personalInfo}>
            <h2>You can send your receipe to us!</h2>
            <form onSubmit={handleSubmit} action="">
              <div className={`row justify-content-center ${styles.rowAll2}`}>
                <div className="col-lg-5">
                  <div className={styles.inputBox}>
                    <input
                      onChange={handleInput}
                      name="email"
                      value={post.email}
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
        <div className={styles.tableBorder}>
              
            <div className="container">
            <div className={styles.h2Edit}>
               <h2>Recommended</h2>
               </div>
               <div className={styles.Down}>
            <div className="row">
              <div className="col-lg-4">
              <div className="row">
                  <div className="col-lg-3">
                    <div className={styles.downBoxLeft}>
                     <div className={styles.number}>
                     <h4>01</h4>
                      <h5>of 06</h5>
                     </div>
                    <div className={styles.line}></div>
                    </div>
                  </div>
                  <div style={{position:"relative"}} className="col-lg-7">
                    <div className={styles.downBoxRight}>
                    <div className={styles.pEdit}>
                      <p>Omelet with Pressed Caviar and Sour Cream</p>
                    </div>
                    <div className={styles.omletImg}>
                        <img src="/assets/image/omlet1.png" alt="" />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-3">
                  <div className={styles.downBoxLeft}>
                     <div className={styles.number}>
                     <h4>01</h4>
                      <h5>of 06</h5>
                     </div>
                    <div className={styles.line}></div>
                    </div>
                  </div>
                  <div style={{position:"relative"}} className="col-lg-8">
                  <div className={styles.downBoxRight}>
                    <div className={styles.pEdit}>
                      <p>Crispy Potato Galette with Dill Cream, Sturgeon and  Caviar</p>
                    </div>
                    <div className={styles.omletImg}>
                        <img src="/assets/image/omlet2.png" alt="" />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-3">
                  <div className={styles.downBoxLeft}>
                     <div className={styles.number}>
                     <h4>01</h4>
                      <h5>of 06</h5>
                     </div>
                    <div className={styles.line}></div>
                    </div>
                  </div>
                  <div style={{position:"relative"}} className="col-lg-8">
                  <div className={styles.downBoxRight}>
                    <div className={styles.pEdit}>
                      <p>Fancy Deviled Eggs with Caviar and Crème Fraîche</p>
                    </div>
                    <div className={styles.omletImg}>
                        <img src="/assets/image/omlet3.png" alt="" />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
            <div className={`text-center`}>
            <button className={styles.buttonHover}>See all</button>
        </div>
        </div>
      </div>
    </>
  );
}
