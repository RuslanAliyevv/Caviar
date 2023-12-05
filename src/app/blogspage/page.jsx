import React from "react";
import styles from "./styles.module.css";

export default function BlogsPage() {
  return (
    <>
      <div className={styles.Blogs}>
        <h2 className="text-center">Blogs</h2>
        <div className={styles.backFone}></div>
        <div className="container">
          <div className={`row ${styles.rowAll}`}>
            <div className="col-lg-6">
              <div className={styles.box}>
                <div className={styles.boxContent}>
                  <img src="/assets/image/blogspage1.png" alt="" />
                  <h2>Blog Name</h2>
                  <div className={styles.pEdit}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.box}>
                <div className={styles.boxContent}>
                  <img src="/assets/image/blogspage2.png" alt="" />
                  <h2>Blog Name</h2>
                  <div className={styles.pEdit}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.box}>
                <div className={styles.boxContent}>
                  <img src="/assets/image/blogspage3.png" alt="" />
                  <h2>Blog Name</h2>
                  <div className={styles.pEdit}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.box}>
                <div className={styles.boxContent}>
                  <img src="/assets/image/blogspage1.png" alt="" />
                  <h2>Blog Name</h2>
                  <div className={styles.pEdit}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.box}>
                <div className={styles.boxContent}>
                  <img src="/assets/image/blogspage2.png" alt="" />
                  <h2>Blog Name</h2>
                  <div className={styles.pEdit}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.box}>
                <div className={styles.boxContent}>
                  <img src="/assets/image/blogspage3.png" alt="" />
                  <h2>Blog Name</h2>
                  <div className={styles.pEdit}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backFone2}>
          
        </div>
      </div>
    </>
  );
}
