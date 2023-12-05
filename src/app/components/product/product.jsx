"use client";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { add } from "@/Redux/Cartslice";
// import axios from "axios";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
export default function Product() {
  // const [products, setproducts] = useState([]);
  // const dispatch = useDispatch();

  // const getProducts = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/api/products");
  //     const data = response.data;
  //     setproducts(data);
  //   } catch (error) {
  //     console.error("Hata oluştu:", error);
  //   }
  // };

  // const handleadd = (product) => {
  //   dispatch(add(product));
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <>
      <div className={styles.Product}>
        <h4 className="text-center">Our Product</h4>
        <div className={styles.h2Edit}>
          <h2 className="text-center">
            Explore our curated caviar collection for a taste of pure luxury.
          </h2>
        </div>
        <div className="container">
          <div className={`row ${styles.rowAll}`}>
            {/* {products.map((product) => ( */}
              <div className="col-lg-3 col-12">
                <div className={styles.box}>
                  <div className={styles.boxUp}>
                    <img src="/assets/image/product1.png" alt="" />
                    <div className={styles.line}></div>
                  </div>
                  <div className={styles.boxDown}>
                    <h3>Black Caviar 50 gr</h3>
                    <h3 className={styles.h3Edit}>$60.00</h3>
                  </div>
                  <p>Add to cart +</p>
                </div>
              </div>
             {/* ))} */}

            <div className="col-lg-3 col-12">
              <div className={styles.box}>
                <div className={styles.boxUp}>
                  <img src="/assets/image/product2.png" alt="" />
                  <div className={styles.line}></div>
                </div>
                <div className={styles.boxDown}>
                  <h3>Black Caviar 250 gr</h3>
                  <h3 className={styles.h3Edit}>$60.00</h3>
                </div>
                <p>Add to cart +</p>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className={styles.box}>
                <div className={styles.boxUp}>
                  <img src="/assets/image/product3.png" alt="" />
                  <div className={styles.line}></div>
                </div>
                <div className={styles.boxDown}>
                  <h3>Black Caviar 28 gr</h3>
                  <h3 className={styles.h3Edit}>$60.00</h3>
                </div>
                <p>Add to cart +</p>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className={styles.box}>
                <div className={styles.boxUp}>
                  <img src="/assets/image/product4.png" alt="" />
                  <div className={styles.line}></div>
                </div>
                <div className={styles.boxDown}>
                  <h3>Caviar Set</h3>
                  <h3 className={styles.h3Edit}>$200.00</h3>
                </div>
                <p>Add to cart +</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.forButton}>
          <Link href="./productspage">
            <button className={styles.buttonHover}>All Product</button>
          </Link>
        </div>
      </div>
    </>
  );
}
