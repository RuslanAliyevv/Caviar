"use client";
import React from "react";
import { add } from "../../Redux/CartSlice";
import styles from "./styles.module.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../Redux/CartSlice";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";
import Spinner from "../../components/Spinner/spinner";
import { useRouter } from "next/navigation";
import AddtoCard from "../../components/AddtoCardModal/[id]/addtocard";

export default function ProductDetail() {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setproducts] = useState([]);
  const [selectedGram, setSelectedGram] = useState("");
  const [post, setPost] = useState({
    title: "",
    product_attachments: [],
    price: "",
    grams: [],
  });
  const { id } = useParams();
  const guid = id;

  const sortedVariants =
    post && post.variants
      ? post.variants.slice().sort((a, b) => a.grams.weight - b.grams.weight)
      : [];


  useEffect(() => {
    if (post && post.variants && post.variants.length > 0 && !selectedGram) {
      const minGramVariant = post.variants.reduce((min, variant) => {
        const weight = parseFloat(variant.grams.weight);
        return weight < parseFloat(min.grams.weight) ? variant : min;
      });
      setSelectedGram(minGramVariant.grams.weight);
    }
  }, [post, selectedGram]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          "https://bbcaviar.com/api/v1/products"
        );
        const data = response.data;
        let foundProduct;
        for (let i = 0; i < data.length; i++) {
          const product = data[i];
          const variant = product.variants.find(
            (variant) => variant.guid === guid
          );
          if (variant) {
            foundProduct = { ...product, variants: product.variants };
          }
        }
        setPost(foundProduct);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchPost();
  }, [guid]);

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
  const [openMock, setOpenMock] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCartClick = (product) => {
    setSelectedProduct(product.guid);
    setOpenMock(true);
  };

  const handleGramChange = (event) => {
    setSelectedGram(event.target.value);
  };

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

  const handleAddToCart = () => {
    if (post && post.variants && post.variants.length > 0) {
      const selectedVariant = post.variants.find(
        (variant) => variant.grams.weight === selectedGram
      );

      if (selectedVariant) {
        // Seçilen miktar kadar ürün ekle
        const updatedCart = [...cartItems]; // Sepetin kopyasını al

        const existingItemIndex = updatedCart.findIndex(
          (item) => item.guid === selectedVariant.guid
        );

        if (existingItemIndex !== -1) {
          // Sepette varsa, miktarı güncelle
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            count: updatedCart[existingItemIndex].count + count,
          };
        } else {
          // Sepette yoksa, yeni öğe olarak ekle
          updatedCart.push({ ...selectedVariant, count });
        }

        // Güncellenmiş sepeti redux store'a gönder
        dispatch(updateCart(updatedCart));
      }
    }
  };
  return (
    <>
      {isLoading && <Spinner />}
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
                    ).product_attachments.length > 0 && (
                      <Image
                        loading="lazy"
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
                        onLoad={() => setIsLoading(false)}
                        onError={() => setIsLoading(false)}
                      />
                    )}
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "0px" }} className="col-lg-6">
              <div className={styles.box}>
                <div className={styles.spanEdit}>
                  <span>
                    <Image
                      loading="lazy"
                      width={20}
                      height={20}
                      src="/assets/image/staricon.png"
                      alt=""
                    />
                  </span>
                  <span>
                    <Image
                      loading="lazy"
                      width={20}
                      height={20}
                      src="/assets/image/staricon.png"
                      alt=""
                    />
                  </span>
                  <span>
                    <Image
                      loading="lazy"
                      width={20}
                      height={20}
                      src="/assets/image/staricon.png"
                      alt=""
                    />
                  </span>
                  <span>
                    <Image
                      loading="lazy"
                      width={20}
                      height={20}
                      src="/assets/image/staricon.png"
                      alt=""
                    />
                  </span>
                  <span>
                    <Image
                      loading="lazy"
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
                  <div className="col-lg-9">
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
                    <span className={styles.h5CheckOut}>Free Shipping</span>
                    <span className={styles.h5CheckOut}>
                      on all orders over $250
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
                  <div className="col-lg-3">
                    <span>
                      <Image
                        loading="lazy"
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
                          {parseInt(variant.grams.weight) >= 1000
                            ? `${parseInt(variant.grams.weight) / 1000} kg`
                            : `${parseInt(variant.grams.weight)}gr`}
                        </label>
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
                    <h5 onClick={handleAddToCart} style={{ marginTop: "10px" }}>
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
                <>
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
                              width={289}
                              height={0}
                              src={
                                product.variants[0].product_attachments[0]
                                  .filePath
                              }
                              alt={
                                product.variants[0].product_attachments[0]
                                  .altText
                              }
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
                </>
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
