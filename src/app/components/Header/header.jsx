import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className={`${styles.Header}`}>
        <div className="container">
          <div className={`row ${styles.rowAll}`}>
            <div className="col-lg-5">
              <div className={styles.box}>
                <div className={styles.left}>
                  <Link href="/">
                    {" "}
                    <span>BB</span>
                  </Link>
                  <Link href="/">
                    <span className={styles.caviarSpan}>Caviar</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className={styles.box}>
                <div className={styles.right}>
                  <nav>
                    <ul>
                      <li>
                        <Link href="/">
                          <span>Home</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <span>Products</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/aboutus">
                          <span>About</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blogspage">
                          <span>Blogs</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contactus">
                          <span>Contact</span>
                        </Link>
                      </li>
                      <li>
                        <span>
                          <img src="/assets/image/searchicon.png" alt="" />
                        </span>
                      </li>
                      <li>
                        <Link href="/shoppingcart">
                          <span className={styles.shopSpan}>
                            <img
                              style={{ position: "relative" }}
                              src="/assets/image/bagicon.png"
                              alt=""
                            />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
