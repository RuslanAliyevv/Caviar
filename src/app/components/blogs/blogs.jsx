import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

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
                Explore our blog for a wealth of culinary inspiration, valuable
                caviar insights, and gourmet tips that will enrich your dining
                journey.
              </p>
            </div>
          </div>
          <div className={styles.contentDown}>
            <span>blogs</span>
            <div className={`row ${styles.rowAll2}`}>
              <div className="col-lg-3">
                <div className={styles.box}>
                  <div className={styles.boxContent}>
                    <div className={styles.imgBox}>
                    <Image width={350} height={0} src="/assets/image/blogs1.png" alt="" />
                    </div>
                 <div className={styles.Content}>
                 <h2>Blog Name</h2>
                    <div className={styles.pEdit2}>
                      <p>
                      Join us at BB Caviar on a delightful journey through the captivating...
                      </p>
                    </div>
                 </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className={styles.box}>
                <div className={styles.boxContent}>
                    <div className={styles.imgBox}>
                    <Image width={350} height={0} src="/assets/image/blogs2.png" alt="" />

                    </div>
                 <div className={styles.Content}>
                 <h2>Blog Name</h2>
                    <div className={styles.pEdit2}>
                      <p>
                      Join us at BB Caviar on a delightful journey through the captivating...
                      </p>
                    </div>
                 </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className={styles.box}>
                <div className={styles.boxContent}>
                    <div className={styles.imgBox}>
                    <Image width={350} height={0} src="/assets/image/blogs3.png" alt="" />

                    </div>
                 <div className={styles.Content}>
                 <h2>Blog Name</h2>
                    <div className={styles.pEdit2}>
                      <p>
                      Join us at BB Caviar on a delightful journey through the captivating...
                      </p>
                    </div>
                 </div>
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
