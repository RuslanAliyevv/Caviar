import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Blogs() {
  return (
    <>
      <div className={styles.Blogs}>
        <div className={styles.blogLogo}>
          <img src="/assets/image/blogLogo.png" alt="" />
        </div>
        <div className="container">
          <div className={styles.contentUp}>
            <div className={styles.pEdit}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className={styles.contentDown}>
            <span>blogs</span>
            <div className={`row ${styles.rowAll2}`}>
              <div className="col-lg-3">
                <div className={styles.box}>
                  <div className={styles.boxContent}>
                    <img src="/assets/image/blogs1.png" alt="" />
                    <h2>Blog Name</h2>
                    <div className={styles.pEdit2}>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className={styles.box}>
                  <div className={styles.boxContent}>
                    <img src="/assets/image/blogs2.png" alt="" />
                    <h2>Blog Name</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className={styles.box}>
                  <div className={styles.boxContent}>
                    <img src="/assets/image/blogs3.png" alt="" />
                    <h2>Blog Name</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.seeAll}>
            <Link href="/blogspage">
              <span>See all</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
