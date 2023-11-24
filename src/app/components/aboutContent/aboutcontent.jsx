import React from "react";
import styles from "./styles.module.css";
export default function Aboutcn() {
  return (
    <>
      <div className={styles.AboutCn}>
        <h2 className="text-center">See what our clients say about us</h2>
        <div className={styles.content}>
          <div className={styles.pEdit}>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
          </div>
          <div className={styles.spanEdit}>
            <span>
              <img src="/assets/image/staricon.png" alt="" />
            </span>
            <span>
              <img src="/assets/image/staricon.png" alt="" />
            </span>
            <span>
              <img src="/assets/image/staricon.png" alt="" />
            </span>
            <span>
              <img src="/assets/image/staricon.png" alt="" />
            </span>
            <span>
              <img src="/assets/image/staricon.png" alt="" />
            </span>
          </div>
          <div className={styles.Smith}>
            <img src="/assets/image/JaneSmith.png" alt="" />
          </div>
          <div className={styles.subtract}>
            {/* //For Image */}
          </div>
        </div>
      </div>
    </>
  );
}
