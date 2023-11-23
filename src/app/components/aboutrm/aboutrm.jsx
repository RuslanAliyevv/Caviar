import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

export default function AboutRm() {
  return (
    <>
      <div className={styles.AboutRm}>
        <div className="container">
          <div className={`row ${styles.rowAll}`}>
            <div className="col-lg-6">
              <div className={styles.left}>
                <h2>It is a long cAVIAR established fact reader</h2>
                <img
                  className={`mt-2 ${styles.imgEdit}`}
                  src="/assets/image/aboutrm.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.right}>
                <h3>ABOUT US</h3>
                <h4>
                  It is a long caviar established fact
                  <br />
                  reader
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown
                </p>
                <Link href="/aboutus">
                  <span>Read more</span>
                </Link>
                <Image
                  style={{ marginLeft: "5px" }}
                  height={15}
                  width={15}
                  unoptimized
                  src="/assets/image/readmoreicon.png"
                  alt="readmore"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.backGrCircle}>
           <img src="./assets/image/backgroundicon.png" alt="" />
        </div> */}
      </div>
    </>
  );
}
