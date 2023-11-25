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
            IT IS A LONG <span>CAVIAR</span> ESTABLISHED
            <br />
            FACT READER
          </h1>
          <p>
            Many desktop publishing packages and web page editors now
            <br />
            use Lorem Ipsum as their default model text, and a search for
            <br />
            'lorem ipsum' will uncover
          </p>
          <Link href="/">
            <button>shop now</button>
          </Link>
        </div>
        <div className={styles.Content}>
        </div>
      </div>
    </>
  );
}
