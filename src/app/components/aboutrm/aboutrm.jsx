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
                <div className={styles.h2Edit}>
                  <h2>A Fusion of Excellence and Tradition</h2>
                </div>
                <img
                  className={`mt-2 ${styles.imgEdit}`}
                  src="/assets/image/aboutrm3.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.right}>
                <h3>ABOUT US</h3>
                <div className={styles.h4Edit}>
                  <h4>
                    We are dedicated to excellence in the world of caviar.
                  </h4>
                </div>
               <div className={styles.pEdit}>
               <p>
                  With a rich heritage, a commitment to quality, and a legacy of
                  sustainability, we invite you to join us on a culinary journey
                  like no other. <br /> Our commitment to quality is unwavering. We
                  take immense pride in sourcing caviar that's free from
                  hormones, antibiotics, dyes, or preservatives, ensuring a pure
                  and authentic taste experience. Our legacy spans generations,
                  and our expertise is reflected in every jar we produce.
                </p>
               </div>
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
           <img src="./assets/image/circle.png" alt="" />
        </div> */}
      </div>
    </>
  );
}
