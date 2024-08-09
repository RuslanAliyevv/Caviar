import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function CaviarIntro() {
  return (
    <>
      <div className={styles.Intro}>
        <div className={styles.overlay}></div>
        <div className={styles.introContent}>
          <div className={styles.h1Edit}>
            <h1>
              Experience luxury with <br />
              <span>BB Caviar</span>, a story of elegance and <br /> tradition.
            </h1>
          </div>
          <div className={styles.pEdit}>
            <p>
              At BB Caviar, we take immense pride in our unwavering commitment
              to natural quality and ensuring the utmost customer satisfaction.
            </p>
          </div>
          <div className={styles.wrapper}>
            <Link href="/productspage">
              <button className={styles.buttonHover}>shop now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
