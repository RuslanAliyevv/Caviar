"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Spinner from "../../Spinner/spinner";
import { updateCart } from "../../../Redux/CartSlice";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../Redux/CartSlice";


export default function AddtoCard({ productId, closeMock }) {
  const cartItems = useSelector((state) => state.cart);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [selectedGram, setSelectedGram] = useState("");
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const sortedVariants =
    product && product.variants
      ? product.variants.slice().sort((a, b) => a.grams.weight - b.grams.weight)
      : [];

      
    useEffect(() => {
    if (
      product &&
      product.variants &&
      product.variants.length > 0 &&
      !selectedGram
    ) {
      const minGramVariant = product.variants.reduce((min, variant) => {
        const weight = parseFloat(variant.grams.weight);
        return weight < parseFloat(min.grams.weight) ? variant : min;
      });
      setSelectedGram(minGramVariant.grams.weight);
    }
  }, [product, selectedGram]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://bbcaviar.com/api/v1/products/${productId}`
        );
        const productData = response.data;
        setProduct(productData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleGramChange = (event) => {
    setSelectedGram(event.target.value);
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleAddToCart = () => {
    if (product && product.variants && product.variants.length > 0) {
      const selectedVariant = product.variants.find(
        (variant) => variant.grams.weight === selectedGram
      );

      if (selectedVariant) {
        const updatedCart = [...cartItems]; 

        const existingItemIndex = updatedCart.findIndex(
          (item) => item.guid === selectedVariant.guid
        );

        if (existingItemIndex !== -1) {
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            count: updatedCart[existingItemIndex].count + count,
          };
        } else {
          updatedCart.push({ ...selectedVariant, count });
        }
        dispatch(updateCart(updatedCart));
      }
    }
  };

  return (
    <>
      <div className={styles.Alert}>
        <div className={styles.alertAll}>
          <div className={styles.spiner}>{isLoading && <Spinner />}</div>
          {product && (
            <div className="container">
              <div className={styles.boxUp}>
                <div className={`row ${styles.rowAll}`}>
                  <div className="col-lg-11 col-10">
                    <div className={styles.left}>
                      <p>Add to cart</p>
                    </div>
                  </div>
                  <div className="col-lg-1 col-2">
                    <div className={styles.right}>
                      <div
                        className={styles.imgEdit}
                        onClick={() => closeMock(false)}
                      >
                        <Image
                          width={24}
                          height={26}
                          alt=""
                          src="/assets/image/x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.line}></div>
                </div>
              </div>

              <div className={`row ${styles.rowAll}`}>
                <div className="col-lg-5">
                  <div className="box">
                    <div className={styles.boxDiv}>
                      {product &&
                      product.variants &&
                      product.variants.find(
                        (variant) => variant.grams.weight === selectedGram
                      ) &&
                      product.variants.find(
                        (variant) => variant.grams.weight === selectedGram
                      ).product_attachments &&
                      product.variants.find(
                        (variant) => variant.grams.weight === selectedGram
                      ).product_attachments.length > 0 ? (
                        <Image
                          loading="lazy"
                          className={styles.detailImg}
                          width={278}
                          height={378}
                          src={
                            product.variants.find(
                              (variant) => variant.grams.weight === selectedGram
                            ).product_attachments[0].filePath
                          }
                          alt={
                            product.variants.find(
                              (variant) => variant.grams.weight === selectedGram
                            ).product_attachments[0].altText
                          }
                        />
                      ) : (
                        <p>No image available</p>
                      )}
                    </div>
                  </div>
                </div>
                <div style={{ marginLeft: "0px" }} className="col-lg-6">
                  <div className={styles.box}>
                    <div
                      style={{ marginTop: "15px" }}
                      className="row align-items-baseline"
                    >
                      <div className="col-lg-8">
                        <div className={styles.h3Edit}>
                          <h3>{product.name} :</h3>
                        </div>
                        {product && product.variants && selectedGram && (
                          <h6>
                            {
                              product.variants.find(
                                (variant) =>
                                  variant.grams.weight === selectedGram
                              ).price
                            }
                            $
                          </h6>
                        )}
                        <span className={styles.h5CheckOut}>Shipping</span>
                        <span className={styles.h5CheckOut}>
                          calculated at checkout.
                        </span>
                        <div className={styles.line}></div>
                        <p className={styles.pStock}>
                          {product.variants.map(
                            (variant) =>
                              variant.grams.weight === selectedGram &&
                              `${variant.quantity} in stock, ready to ship.`
                          )}
                        </p>
                      </div>
                    </div>
                    <div className={styles.radioGroup}>
                      {sortedVariants &&
                        sortedVariants.map((variant) => (
                          <div
                            className={styles.radioContainer}
                            key={variant.guid}
                          >
                            <input
                              type="radio"
                              id={`radioInput${variant.grams.weight}`}
                              value={variant.grams.weight}
                              checked={selectedGram === variant.grams.weight}
                              onChange={handleGramChange}
                            />
                            <label
                              htmlFor={`radioInput${variant.grams.weight}`}
                            >
                              {parseInt(variant.grams.weight) >= 1000
                                ? `${parseInt(variant.grams.weight) / 1000} kg`
                                : `${parseInt(variant.grams.weight)}gr`}
                            </label>
                          </div>
                        ))}
                    </div>
                    <div className={styles.qty}>
                      <div className={styles.spanDiv}>
                        <span
                          onClick={handleMinus}
                          style={{ marginRight: "5px" }}
                        >
                          -
                        </span>
                      </div>
                      <div className={styles.spanDiv}>
                        <h5
                          style={{ color: "#fff" }}
                          className={`text-grey mt-2 mr-1 ml-1`}
                        >
                          {count}
                        </h5>
                      </div>
                      <div className={styles.spanDiv}>
                        <span onClick={handlePlus}>+</span>
                      </div>
                    </div>
                    <h5
                      className={styles.buttonHover}
                      onClick={handleAddToCart}
                      style={{ marginTop: "10px" }}
                    >
                      Add to Cart
                    </h5>
                    <h6
                      onClick={() =>
                        router.push(
                          `/productdetail/${product.variants[0].guid}`
                        )
                      }
                      className={styles.h6About}
                    >
                      More info about product
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
