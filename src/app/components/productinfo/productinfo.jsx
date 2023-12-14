import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

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
                 <img src="/assets/image/productinfo.png" alt="" />
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backGrCircle}>
           <img src="./assets/image/circle02.png" alt="" />
        </div>
      </div>
    </>
  );
}
