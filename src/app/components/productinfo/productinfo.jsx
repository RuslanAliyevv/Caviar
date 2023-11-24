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
                    It is a long cAVIAR established fact <br />
                    reader
                  </h2>
                  <div className={styles.pEdit}>
                    {" "}
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,{" "}
                    </p>
                  </div>
                  <Link href="/">
                    <button>shop now</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="box">
                <div className="right">
                  <img src="/assets/image/productinfo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
