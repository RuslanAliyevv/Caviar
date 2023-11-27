import React from "react";
import styles from "./styles.module.css";
import Cards from "../components/Cards/card";

export default function Products() {
  return (
    <>
      <div className={styles.Products}>
        <h2>PRODUCT</h2>
        <div className={styles.tableBorder}></div>
        <Cards />

        <div className={styles.getInTouch}>
          <h2>Get in Touch with Us!</h2>
          <div className={styles.pEdit}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          <button className={styles.buttonHover}>Call us</button>
        </div>
      </div>
    </>
  );
}
