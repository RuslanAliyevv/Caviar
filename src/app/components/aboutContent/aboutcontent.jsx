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
              I must say, BB Caviar has completely exceeded my expectations. The
              caviar is simply exceptional in taste and quality. Knowing that
              it's sourced sustainably makes the experience even more
              satisfying.
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
          <div className={styles.subtract}>{/* //For Image */}</div>
        </div>
      </div>
    </>
  );
}
