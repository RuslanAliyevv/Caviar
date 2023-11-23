import React from "react";
import styles from "./styles.module.css";

export default function Dictionary() {
  return (
    <>
      <div className={styles.Dictionary}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <div className={styles.h2Edit}>
            <h2>
              “For me, true luxury can be caviar or a day with no meetings, no
              appointments and no schedule”
            </h2>
          </div>
          <h4>Michael Kors</h4>
        </div>
      </div>
    </>
  );
}
