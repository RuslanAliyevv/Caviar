"use client";
import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Link from "next/link";

export default function ProductDetail() {
  const [count, setCount] = useState(1);
  const handleMinus = () => {
    if (count - 1) {
      setCount(count - 1);
    }
  };
  const handlePlus = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className={styles.ProductDetail}>
        <h2>Product Details</h2>
        <div className={styles.backFone}></div>
        <div className="container">
          <div className={`row ${styles.rowAll}`}>
            <div className="col-lg-6">
              <div className="box">
                <img src="/assets/image/productdetail1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box">
                <div className={styles.spanEdit}>
                  <span>
                    <img src="/assets/image/staricon.png" alt="" />
                  </span>
                  <span>
                    <img src="/assets/image/staricon.png" alt="" />
                  </span>
                  <span>
                    <img src="/assets/image/staricon.png" alt="" />
                  </span>
                  <span>
                    <img src="/assets/image/staricon.png" alt="" />
                  </span>
                  <span>
                    <img src="/assets/image/staricon.png" alt="" />
                  </span>
                </div>
                <div
                  style={{ marginTop: "15px" }}
                  className="row align-items-baseline"
                >
                  <div className="col-lg-8">
                    <div className={styles.h3Edit}>
                      <h3>American Sturgeon Caviar: A Gourmet's Treasure</h3>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <span>
                      <img src="/assets/image/heart.png" alt="" />
                    </span>
                  </div>
                </div>
                <h4>In Stock</h4>
                <h6>$60.00</h6>
                <div className="row align-items-baseline">
                  <div className="col-lg-6">
                    <div className={styles.qty}>
                      <span onClick={handleMinus}>-</span>
                      <span style={{ marginLeft: "10px" }}>{count}</span>
                      <span style={{ marginLeft: "10px" }} onClick={handlePlus}>
                        +
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h5 style={{ marginTop: "10px" }}>Add to Cart</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className={styles.Content}>
          <div className={styles.contentBox}>
            <Tabs
              defaultActiveKey="profile"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="profile" title=" Description">
                <p>
                  Delight in the luxurious taste of American Sturgeon Caviar, a
                  top choice for caviar aficionados. Harvested from the pristine
                  North American waters, this caviar is a symbol of gastronomic
                  opulence. Each grain promises a smooth, buttery texture and a
                  rich, nuanced flavor, ideal for enhancing any special occasion
                  or adding a touch of sophistication to your culinary
                  creations.
                </p>
                <h4>Taste the Elegance:</h4>
                <p>
                  Texture: Silky and smooth, offering a melt-in-the-mouth
                  experience. Flavor: A perfect balance of rich buttery notes
                  and a subtle nuttiness, creating a memorable taste sensation.
                </p>
                <h4>Key Features:</h4>
                <p>
                  Species: Genuine American Sturgeon (Acipenser species) <br />{" "}
                  Origin: Ethically sourced from North American waters <br />{" "}
                  Available Sizes: Choose from 28g, 50g, 150g, and 250g <br />{" "}
                  Freshness Guaranteed: Best enjoyed within 4 weeks, stored
                  under refrigeration <br />
                  Packaging: Comes in specially sealed containers to ensure peak
                  freshness
                </p>
              </Tab>
              <Tab eventKey="home" title="Additional Information">
                <p>
                  Best enjoyed chilled, complemented by simple accompaniments
                  like blinis, mild crème fraîche, and pairs wonderfully with
                  champagne or select white wines. An exquisite garnish for
                  canapés and a luxurious boost to dishes like pasta, eggs, or
                  seafood.
                </p>
                <h4>Storage Tips:</h4>
                <p>
                  Keep refrigerated between 32°F and 36°F, preferably in the
                  coldest section of your fridge. Consume within three days
                  after opening for the best flavor.
                </p>
                <h4>Diet Compatibility:</h4>
                <p>
                  Contains fish (sturgeon) <br />
                  Gluten-free and dairy-free friendly <br />
                  Discover the distinct taste and quality of American Sturgeon
                  Caviar, a culinary gem that adds a touch of luxury to every
                  dish. 
                </p>
              </Tab>
              <Tab eventKey="longer-tab" title="Review">
                <p>
                  Delight in the luxurious taste of American Sturgeon Caviar, a
                  top choice for caviar aficionados. Harvested from the pristine
                  North American waters, this caviar is a symbol of gastronomic
                  opulence. Each grain promises a smooth, buttery texture and a
                  rich, nuanced flavor, ideal for enhancing any special occasion
                  or adding a touch of sophistication to your culinary
                  creations.
                </p>
                <h4>Taste the Elegance:</h4>
                <p>
                  Texture: Silky and smooth, offering a melt-in-the-mouth
                  experience. Flavor: A perfect balance of rich buttery notes
                  and a subtle nuttiness, creating a memorable taste sensation.
                </p>
                <h4>Key Features:</h4>
                <p>
                  Species: Genuine American Sturgeon (Acipenser species) Origin:
                  Ethically sourced from North American waters Available Sizes:
                  Choose from 28g, 50g, 150g, and 250g Freshness Guaranteed:
                  Best enjoyed within 4 weeks, stored under refrigeration
                  Packaging: Comes in specially sealed containers to ensure peak
                  freshness
                </p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.TopProducts}>
          <div className={styles.productContent}>
            <div className="container">
              <h2>Top Products</h2>
              <div className={`row ${styles.rowAll}`}>
                <div className="col-lg-3 col-12">
                  <div className={styles.box}>
                    <div className={styles.boxUp}>
                      <img src="/assets/image/product1.png" alt="" />
                      <div className={styles.line}></div>
                    </div>
                    <div className={styles.boxDown}>
                      <h3>Product Name</h3>
                      <h3 className={styles.h3Edit}>$60.00</h3>
                    </div>
                    <p>Add to cart +</p>
                  </div>
                </div>
                <div className="col-lg-3 col-12">
                  <div className={styles.box}>
                    <div className={styles.boxUp}>
                      <img src="/assets/image/product2.png" alt="" />
                      <div className={styles.line}></div>
                    </div>
                    <div className={styles.boxDown}>
                      <h3>Product Name</h3>
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
                      <h3>Product Name</h3>
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
                      <h3>Product Name</h3>
                      <h3 className={styles.h3Edit}>$60.00</h3>
                    </div>
                    <p>Add to cart +</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonEdit}>
            <Link href="./productspage">
                <button className={styles.buttonHover}>
                 All Product
                </button>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
