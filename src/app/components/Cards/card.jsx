"use client";
import React from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "../../Redux/CartSlice";
import { useRouter } from "next/navigation";
import AddtoCard from "../AddtoCardModal/[id]/addtocard";
import { useEffect } from "react";
import Image from "next/image";
export default function Cards({ products }) {

  const dispatch = useDispatch();
  const router = useRouter();
  const handleadd = (product) => {  
    dispatch(add(product));
  };
  const [openMock, setOpenMock] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCartClick = (product) => {
    setSelectedProduct(product.guid);
    setOpenMock(true);
  };

  const getMinPrice = (variants) => {
    let minPrice = Number.MAX_SAFE_INTEGER;

    variants.forEach((variant) => {
      const price = parseFloat(variant.price);
      if (!isNaN(price) && price < minPrice) {
        minPrice = price;
      }
    });

    return minPrice;
  };

  return (
    <div className={styles.Cards}>
      <div className="container">
        <div className="row">
          {products.map((product, pIndex) => (
            <div key={pIndex} className="col-lg-3 col-12">
              <div className={styles.box}>
                <div className={styles.boxUp}>
                  {product.variants && product.variants.length > 0 && (
                    <>
                      <Image
                        loading="lazy"
                        onClick={() =>
                          router.push(
                            `/productdetail/${product.variants[0].guid}`
                          )
                        }
                        width={289}
                        height={0}
                        src={
                          product.variants[0].product_attachments[0].filePath
                        }
                        alt={product.variants[0].product_attachments[0].altText}
                        
                      />
                    </>
                  )}
                  <div className={styles.line}></div>
                </div>
                <div className={styles.boxDown}>
                  <div className={styles.boxDowncontent}>
                    <div className={styles.prNameEdit}>
                      <h3>{`${product.name}`}</h3>
                    </div>
                    <div className={styles.priceEdit}>
                      <h3 className={styles.h3Edit}>{`From $${getMinPrice(
                        product.variants
                      )}`}</h3>
                    </div>
                  </div>
                  <p
                    className={styles.pEdit}
                    onClick={() => handleAddToCartClick(product)}
                  >
                    Add to cart +
                  </p>
                  {openMock && (
                    <AddtoCard
                      productId={selectedProduct}
                      closeMock={setOpenMock}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
