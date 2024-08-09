"use client";
import React from "react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { remove } from "../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import dynamic from "next/dynamic";
import Spinner from "../components/Spinner/spinner";

const Shopping = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const cartItems = useSelector((state) => state.cart);
  useEffect(() => {
    if (cartItems) {
      setIsLoading(false);
    }
  }, [cartItems]);
  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const calculateTotalPrice = (item) => {
    return item.price * item.count;
  };

  const handleMinus = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, count: Math.max(item.count - 1, 1) } : item
    );
    dispatch({ type: "Cart/updateCart", payload: updatedCart });
  };

  const handlePlus = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    dispatch({ type: "Cart/updateCart", payload: updatedCart });
  };

  return (
    <div className={styles.Shopping}>
      <h2>Shopping Cart</h2>
      {isLoading && <Spinner />}
      <div className={styles.tableBorder}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.guid} className="container mt-4 mb-4">
              <div
                className={`d-flex justify-content-center row ${styles.box}`}
              >
                <div className="col-md-11">
                  <div
                    className={`d-flex flex-row justify-content-between align-items-center p-1 mt-4 px-3 rounded ${styles.border}`}
                  >
                    <div
                      className={`mr-1 d-flex align-items-center ${styles.imgBox}`}
                    >
                      <Image
                        width={100}
                        height={70}
                        src={
                          item.product_attachments &&
                          item.product_attachments.length > 0
                            ? item.product_attachments[0].filePath
                            : "/no-image.png"
                        }
                        alt={
                          item.product_attachments &&
                          item.product_attachments.length > 0
                            ? item.product_attachments[0].altText
                            : "No image available"
                        }
                        className="rounded"
                      />
                      <div className={styles.priceDiv}>
                        <div className={styles.spanContentdiv}>
                          <span
                            className={`font-weight-bold ${styles.spanEdit}`}
                          >
                            {`${item.product_attachments[0].title} ${
                              item.grams && item.grams.weight
                            } gr`}
                          </span>
                        </div>
                        <h5 className={styles.priceEdit}>{`$${item.price}`}</h5>
                      </div>
                    </div>
                    <div className={styles.qtyBox}>
                      <div
                        className={`d-flex flex-row align-items-center ${styles.qty}`}
                      >
                        <div className={styles.spanDiv}>
                          <span
                            onClick={() => handleMinus(item.id)}
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
                            {item.count}
                          </h5>
                        </div>
                        <div className={styles.spanDiv}>
                          <span onClick={() => handlePlus(item.id)}>+</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.h5Edit}>
                      <h5
                        style={{ color: "#fff" }}
                        className=""
                      >{`$${calculateTotalPrice(item)}.00`}</h5>
                    </div>
                    <div className={styles.remove}>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className={styles.buttonHover}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className={`text-center ${styles.Message}`}>Bag is empty</p>
        )}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Shopping), { ssr: false });
