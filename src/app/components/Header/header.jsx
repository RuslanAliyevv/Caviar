"use client"

import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { useState,useEffect } from "react";
// import { useSelector } from 'react-redux';

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  // const item = useSelector((state)=>state.cart)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    background: scrolling ? 'rgba(24,24,24,0.8)' : 'transparent',
    backdropFilter: scrolling ? 'blur(10px)' : 'none'
  };
  return (
    <>
      <div  style={headerStyle} className={`${styles.Header}`}>
        <div className="container">
          <div className={`row ${styles.rowAll}`}>
            <div className="col-lg-5 col-12">
              <div className={styles.box}>
                <div className={styles.left}>
                  <Link href="/">
                    <img src="/assets/image/headerlogo.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-6">
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
                        <Link href="/productspage">
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
                      <Link href="./wishlist">
                      <span>
                          <img src="/assets/image/heart.png" alt="" />
                        </span>
                        </Link>
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
