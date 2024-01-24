"use client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../Redux/CartSlice";
import { useRouter } from "next/navigation";
import axios from "axios";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Product() {
  const router = useRouter();
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      const response = await axios.get("http://68.183.53.2:3000/products");
      const data = response.data;
      setproducts(data);
    } catch (error) {
      console.error("Error Message:", error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleadd = (product) => {
    dispatch(add(product));
  };

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
            {products.slice(0, 4).map((product, index) => (
              <div key={index} className="col-lg-3 col-12">
                <div className={styles.box}>
                  <div className={styles.boxUp}>
                    {product &&
                    product.variants &&
                    product.variants[0] &&
                    product.variants[0].product_attachments &&
                    product.variants[0].product_attachments.length > 0 ? (
                      <Image
                        onClick={() =>
                          router.push(`/productdetail/${product.guid}`)
                        }
                        width={289}
                        height={0}
                        src={
                          product.variants[0].product_attachments[0].filePath
                        }
                        alt={product.variants[0].product_attachments[0].altText}
                      />
                    ) : (
                      <p>No image available</p>
                    )}

                    <div className={styles.line}></div>
                  </div>
                  <div className={styles.boxDown}>
                    <div className={styles.boxDowncontent}>
                      <div className={styles.prNameEdit}>
                        <h3>
                          {/* {product.name} {`${product.details[0].gram} gr`} */}
                          {product &&
                            product.variants &&
                            product.variants.length > 0 &&
                            `${product.name} ${product.variants[0].grams.weight} gr`}
                        </h3>
                      </div>
                      <div className={styles.priceEdit}>
                        <h3 className={styles.h3Edit}>
                          {/* {`$${product.details[0].price}`} */}
                          {`$${
                            product &&
                            product.variants &&
                            product.variants[0] &&
                            product.variants[0].price
                          }`}
                        </h3>
                      </div>
                    </div>
                    <p onClick={() => handleadd(product)}>Add to cart +</p>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="col-lg-3 col-12">
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
            </div> */}
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
