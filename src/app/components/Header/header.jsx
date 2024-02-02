"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


export default function Header() {

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  const closeMenu = () => {
    setActive("nav__menu");
    setIcon("nav__toggler");
  };


  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [scrolling, setScrolling] = useState(false);

  const item = useSelector((state) => state.cart);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    background: scrolling ? "rgba(24,24,24,0.8)" : "transparent",
    backdropFilter: scrolling ? "blur(10px)" : "none",
  };
  return (
    <>
      <div style={headerStyle} className={`${styles.Header}`}>
        <div className="container">
          <div className={`row ${styles.rowAll}`}>
            <div className="col-lg-5 col-7">
              <div className={styles.box}>
                <div className={styles.left}>
                  <Link href="/">
                    <Image
                     loading="lazy"
                      width={64}
                      height={64}
                      src="/assets/image/bbcaviarlogo.svg"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-5">
              <div className={styles.box}>
                <div className={styles.right}>
                  <nav className={styles.nav}>
                    <ul className={active}>
                      <li className={styles.navItem}>
                        <Link onClick={closeMenu} href="/">
                          <span className={styles.navLink}>Home</span>
                        </Link>
                      </li>
                      <li className={styles.navItem}>
                        <Link onClick={closeMenu} href="/productspage">
                          <span className={styles.navLink}>Products</span>
                        </Link>
                      </li>
                      <li className={styles.navItem}>
                        <Link onClick={closeMenu} href="/aboutus">
                          <span className={styles.navLink}>About</span>
                        </Link>
                      </li>
                      <li className={styles.navItem}>
                        <Link onClick={closeMenu} href="/blogspage">
                          <span className={styles.navLink}>Blogs</span>
                        </Link>
                      </li>
                      <li className={styles.navItem}>
                        <Link onClick={closeMenu} href="/contactus">
                          <span className={styles.navLink}>Contact</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="./wishlist">
                          <span className={styles.wishlist}>
                            <Image
                             loading="lazy"
                              src="/assets/image/heart.png"
                              alt="heart"
                              width={23}
                              height={23}
                            />
                          </span>
                        </Link>
                      </li>
                     
                     
                    </ul>
                    <li>
                        <Link href="/shoppingcart">
                          <span className={styles.shopSpan}>
                            <Image
                             loading="lazy"
                              style={{ position: "relative" }}
                              src="/assets/image/shoppingcart.png"
                              alt="shopping"
                              width={26}
                              height={26}
                            />
                          </span>
                        </Link>
                      </li>
                    <li className={styles.numberLi}>
                        <span className={styles.number}>
                          {isClient && item.length}
                        </span>
                      </li>
                    <div onClick={navToggle} className={icon}>
                      <div className="line1"></div>
                      <div className="line2"></div>
                      <div className="line3"></div>
                    </div>
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
