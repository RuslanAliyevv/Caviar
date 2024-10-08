"use client";
import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { add } from "../../Redux/CartSlice";
import AddtoCard from "../AddtoCardModal/[id]/addtocard";
import { useRouter } from "next/navigation";
import axios from "axios";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Product() {
  const router = useRouter();
  const [products, setproducts] = useState([]);
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

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://bbcaviar.com/api/v1/products/main-category/8fc4b1a4-28dd-49bc-ab4c-b2bb71a8c843"
      );
      const data = response.data;

      setproducts(data);
    } catch (error) {
      console.error("Error Message:", error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  // const handleadd = (product) => {
  //   dispatch(add(product.variants[0]));
  // };

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
                        loading="lazy"
                        onClick={() =>
                          router.push(
                            `/productdetail/${product.variants[0].guid}`
                          )
                        }
                        width={278}
                        height={378}
                        src={
                          product.variants[0].product_attachments[0].filePath
                        }
                        alt={product.variants[0].product_attachments[0].altText}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                    <div className={styles.borderone}>
                      <div></div>
                    </div>
                    <div className={styles.bordertwo}>
                      <div></div>
                    </div>
                    <a href="#"></a>

                    <div className={styles.line}></div>
                  </div>
                  <div className={styles.boxDown}>
                    <div className={styles.boxDowncontent}>
                      <div className={styles.prNameEdit}>
                        <h3>
                          {product &&
                            product.variants &&
                            product.variants.length > 0 &&
                            `${product.name}`}
                        </h3>
                      </div>
                      <div className={styles.priceEdit}>
                        <h3 className={styles.h3Edit}>
                          {`From $${getMinPrice(product.variants)}`}
                        </h3>
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
        <div className={styles.forButton}>
          <Link href="./productspage">
            <button className={styles.buttonHover}>All Product</button>
          </Link>
        </div>
      </div>
    </>
  );
}
