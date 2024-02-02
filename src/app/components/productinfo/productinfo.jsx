import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ProductInfo() {
  return (
    <>
      <div className={styles.PrInfo}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="box">
                <div className="left">
                  <h2>
                    Explore Exceptional Culinary Excellence with BB Caviar
                    Selection
                  </h2>
                  <div className={styles.pEdit}>
                    {" "}
                    <p>
                      Are you ready for an exceptional culinary journey? Begin
                      your exploration of our exquisite caviar collection and
                      elevate your dining experience. Whether you're a seasoned
                      caviar aficionado or new to this delicacy, BB Caviar
                      promises a delightful taste adventure that will satisfy
                      your palate. Shop now to relish the unparalleled luxury of
                      BB Caviar.
                    </p>
                  </div>
                  <Link href="/productspage">
                    <button className={styles.buttonHover}>shop now</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="box">
                <div className="right">
                  <div className={styles.hoverEdit}>
                    <Image   loading="lazy" width={655} height={501} src="/assets/image/productinfo.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backGrCircle}>
          <Image
           loading="lazy"
            height={870}
            width={800}
            src="/assets/image/circle02.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
