"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../../Redux/CartSlice";
import styles from "./styles.module.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProductDetail() {
  const { id } = useParams();
  const guid = id;
  const [post, setPost] = useState({
    title: "",
    product_attachments: [],
    price: "",
    grams: [],
  });

  const [selectedGram, setSelectedGram] = useState("");
  const sortedVariants =
  post && post.variants
  ? post.variants.slice().sort((a, b) => a.grams.weight - b.grams.weight)
  : [];
  useEffect(() => {
    if (post && post.variants && post.variants.length > 0 && !selectedGram) {
      setSelectedGram(post.variants[0].grams.weight);
    }
  }, [post, selectedGram]);

  const handleGramChange = (event) => {
    setSelectedGram(event.target.value);
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get("https://bbcaviar.com/api/v1/products");
        const data = response.data;
        setPost(data && data.find((u) => u.guid === guid));
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchPost();
  }, [guid]);

  const [count, setCount] = useState(1);
  const handleMinus = () => {
    if (count - 1) {
      setCount(count - 1);
    }
  };
  const handlePlus = () => {
    setCount(count + 1);
  };
  const dispatch = useDispatch();

  const handleadd = () => {
    if (post) {
      dispatch(add(post));
    }
  };
  return (
    <>
      <div className={styles.ProductDetail}>
        <h2>Product Details</h2>
        <div className={styles.backFone}></div>
        <div className="container">
          <div className={`row ${styles.rowAll}`}>
            <div className="col-lg-5">
              <div className="box">
                <div className={styles.boxDiv}>
                  {post &&
                  post.variants &&
                  post.variants.find(
                    (variant) => variant.grams.weight === selectedGram
                  ) &&
                  post.variants.find(
                    (variant) => variant.grams.weight === selectedGram
                  ).product_attachments &&
                  post.variants.find(
                    (variant) => variant.grams.weight === selectedGram
                  ).product_attachments.length > 0 ? (
                    <Image
                      className={styles.detailImg}
                      width={390}
                      height={450}
                      src={
                        post.variants.find(
                          (variant) => variant.grams.weight === selectedGram
                        ).product_attachments[0].filePath
                      }
                      alt={
                        post.variants.find(
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
                <div className={styles.spanEdit}>
                  <span>
                    <Image
                      width={20}
                      height={20}
                      src="/assets/image/staricon.png"
                      alt=""
                    />
                  </span>
                  <span>
                    <Image
                      width={20}
                      height={20}
                      src="/assets/image/staricon.png"
                      alt=""
                    />
                  </span>
                  <span>
                    <Image
                      width={20}
                      height={20}
                      src="/assets/image/staricon.png"
                      alt=""
                    />
                  </span>
                  <span>
                    <Image
                      width={20}
                      height={20}
                      src="/assets/image/staricon.png"
                      alt=""
                    />
                  </span>
                  <span>
                    <Image
                      width={20}
                      height={20}
                      src="/assets/image/staricon.png"
                      alt=""
                    />
                  </span>
                </div>
                <div
                  style={{ marginTop: "15px" }}
                  className="row align-items-baseline"
                >
                  <div className="col-lg-8">
                    <div className={styles.h3Edit}>
                      <h3>{post && post.name} :</h3>
                    </div>
                    {post &&
                      post.variants &&
                      post.variants.find(
                        (variant) => variant.grams.weight === selectedGram
                      ) && (
                        <h6>
                          {
                            post.variants.find(
                              (variant) => variant.grams.weight === selectedGram
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
                      {post &&
                        post.variants &&
                        post.variants.length > 0 &&
                        post.variants.map(
                          (variant) =>
                            variant.grams.weight === selectedGram &&
                            `${variant.quantity} in stock, ready to ship.`
                        )}
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <span>
                      <Image
                        width={26}
                        height={23}
                        src="/assets/image/heart.png"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
                <div className={styles.radioGroup}>
                  {sortedVariants &&
                    sortedVariants.map((variant) => (
                      <div className={styles.radioContainer} key={variant.guid}>
                        <input
                          type="radio"
                          id={`radioInput${variant.grams.weight}`}
                          value={variant.grams.weight}
                          checked={selectedGram === variant.grams.weight}
                          onChange={handleGramChange}
                        />
                        <label htmlFor={`radioInput${variant.grams.weight}`}>
                          {variant.grams.weight} gr
                        </label>

                        {/* {selectedGram === variant.grams.weight && (
                              <div className={styles.selectedGramInfo}>
                                <p>Price: ${variant.price}</p>
                                {variant.product_attachments &&
                                  variant.product_attachments.length > 0 && (
                                    <div className={styles.selectedGramImage}>
                                      <Image
                                        width={100}
                                        height={100}
                                        src={
                                          variant.product_attachments[0]
                                            .filePath
                                        }
                                        alt={
                                          variant.product_attachments[0].altText
                                        }
                                      />
                                    </div>
                                  )}
                              </div>
                            )} */}
                      </div>
                    ))}
                </div>
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
                    <h5 onClick={handleadd} style={{ marginTop: "10px" }}>
                      Add to Cart
                    </h5>
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
                {post &&
                  post.productDescription &&
                  post.productDescription.map((description, index) => (
                    <div key={index}>
                      <p>{description.description}</p>
                      {description.productDescriptionRows &&
                        description.productDescriptionRows.map(
                          (row, rowIndex) => (
                            <div key={rowIndex}>
                              <h4>{row.title}</h4>
                              {row.description.includes("*") ? (
                                <p>
                                  {row.description
                                    .split("*")
                                    .map((item, index) => (
                                      <span key={index}>
                                        {item}
                                        <br />
                                      </span>
                                    ))}
                                </p>
                              ) : (
                                <p>{row.description}</p>
                              )}
                            </div>
                          )
                        )}
                    </div>
                  ))}
                {/* <h4>Taste the Elegance:</h4>
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
                </p> */}
              </Tab>
              <Tab eventKey="home" title="Additional Information">
                {post &&
                  post.productAdditionalInformation &&
                  post.productAdditionalInformation.map(
                    (description, index) => (
                      <div key={index}>
                        <p>{description.description}</p>
                        {description.productAdditionalInformationRows &&
                          description.productAdditionalInformationRows.map(
                            (row, rowIndex) => (
                              <div key={rowIndex}>
                                <h4>{row.title}</h4>
                                {row.description.includes("*") ? (
                                  <p>
                                    {row.description
                                      .split("*")
                                      .map((item, index) => (
                                        <span key={index}>
                                          {item}
                                          <br />
                                        </span>
                                      ))}
                                  </p>
                                ) : (
                                  <p>{row.description}</p>
                                )}
                              </div>
                            )
                          )}
                      </div>
                    )
                  )}
                {/* <p>
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
                </p> */}
              </Tab>
              <Tab eventKey="longer-tab" title="Review"></Tab>
            </Tabs>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.infoLine}></div>
        <div className={styles.Delivery}>
          <h2 className="text-center">DELIVERY & RETURNS</h2>
          <div className="container">
            <div className={`row ${styles.rowAll}`}>
              <div className="col-lg-4">
                <div className="box">
                  <div className={styles.imgEdit}>
                    <Image
                      width={85}
                      height={85}
                      src="/assets/image/truck.png"
                      alt=""
                    />
                  </div>
                  <h4>NEXT DAY DELIVERY</h4>
                  <div className={styles.pEdit}>
                    <p>Priority delivery options available for all orders</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box">
                  <div className={styles.imgEdit}>
                    <Image
                      width={85}
                      height={85}
                      src="/assets/image/booking.png"
                      alt=""
                    />
                  </div>
                  <h4>QUALITY GUARANTEE</h4>
                  <div className={styles.pEdit}>
                    <p>Guaranteed freshness and quality of products</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box">
                  <div className={styles.imgEdit}>
                    <Image
                      width={85}
                      height={85}
                      src="/assets/image/chat.png"
                      alt=""
                    />
                  </div>
                  <h4>SUPPORT AVAILABLE</h4>
                  <div className={styles.pEdit}>
                    <p>Through our contact form or by phone during our hours</p>
                  </div>
                </div>
              </div>
            </div>
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
                      <Image
                        width={289}
                        height={434}
                        src="/assets/image/product1.png"
                        alt=""
                      />
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
                      <Image
                        width={289}
                        height={434}
                        src="/assets/image/product2.png"
                        alt=""
                      />

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
                      <Image
                        width={289}
                        height={434}
                        src="/assets/image/product3.png"
                        alt=""
                      />

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
                      <Image
                        width={289}
                        height={434}
                        src="/assets/image/product4.png"
                        alt=""
                      />

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
              <Link href="/productspage">
                <button className={styles.buttonHover}>All Product</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
