import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function CaviarIntro() {
  return (
    <>
      <div className={styles.Intro}>
        <div className={styles.overlay}></div>
        <div className={styles.introContent}>
          <h1>
            Experience luxury with <br />
            <span>BB Caviar</span>, a story of elegance and <br /> tradition.
          </h1>
          <p>
            At BB Caviar, we take immense pride in our unwavering <br /> commitment to
            natural quality and ensuring the utmost <br /> customer satisfaction.
          </p>
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
