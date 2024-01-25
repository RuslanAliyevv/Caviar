"use client";
import React from "react";
import styles from "./styles.module.css";
import Cards from "../components/Cards/card";
import { useState, useEffect } from "react";
import axios from "axios";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import MultiRangeSlider from "../components/multi/multirangeslider";

export default function Products() {
  const [products, setproducts] = useState([]);
  const [categoryname, setCategoryname] = useState([]);
  const [fish, setFish] = useState([]);
  const [gram, setGram] = useState([]);

  useEffect(() => {
    const fetchGramOptions = async () => {
      try {
        const response = await axios.get(
          "http://68.183.53.2:3000/product-gram/48ab9d6b-117c-4ba8-b288-8954da356902"
        );
        const data = response.data;
        // const GramWeight = data.map((item) => item.weight);
        setGram(data);
      } catch (error) {
        console.error("Error fetching fish options:", error);
      }
    };

    fetchGramOptions();
  }, []);

  useEffect(() => {
    const fetchFishOptions = async () => {
      try {
        const response = await axios.get(
          "http://68.183.53.2:3000/sub-category/48ab9d6b-117c-4ba8-b288-8954da356902"
        );
        const data = response.data;
        // const fishNames = data.map((item) => item.name);
        setFish(data);
      } catch (error) {
        console.error("Error fetching fish options:", error);
      }
    };
    fetchFishOptions();
  }, []);

  const getCategoryname = async () => {
    try {
      const response = await axios.get("http://68.183.53.2:3000/category/");
      const data = response.data;
      // console.log(response.data);
      setCategoryname(data);
    } catch (error) {
      console.error("Error Message:", error);
    }
  };

  useEffect(() => {
    getCategoryname();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://68.183.53.2:3000/products/main-category/48ab9d6b-117c-4ba8-b288-8954da356902"
      );
      const data = response.data;
      // console.log(response.data);
      setproducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error("Error Message:", error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  const categories = Array.from(new Set(products.map((res) => res.category)));

  // Category filter

  // const [selectedCategory, setSelectedCategory] = useState("");
  // const handleCategoryChange = (event) => {
  //   const value = event.target.value;
  //   setSelectedCategory(value === "All" ? "" : value);
  // };
  // const filterProducts = (products, selectedCategory) => {
  //   if (!selectedCategory) {
  //     return products;
  //   }

  //   return products.filter((product) => product.category === selectedCategory);
  // };

  // const filteredProducts = filterProducts(products, selectedCategory);

  //range filter
  const [filteredProducts, setFilteredProducts] = useState([]);
  const RangeChange = (min, max) => {
    const filteredProducts = products.filter((product) =>
      product.variants.some((variant) => {
        const price = parseFloat(variant.price);
        return price >= min && price <= max;
      })
    );

    const filteredProductsWithVariants = filteredProducts.map((product) => {
      return {
        ...product,
        variants: product.variants.filter((variant) => {
          const price = parseFloat(variant.price);
          return price >= min && price <= max;
        }),
      };
    });
    setFilteredProducts(filteredProductsWithVariants);
  };

  const [selectedGram, setSelectedGram] = useState(null);
  const [selectedFish, setSelectedFish] = useState(null);
  const handleFishChange = (e) => {
    const selectedGuid = e.target.value;
    const selectedFish = fish.find((fish) => fish.guid === selectedGuid);

    if (!selectedFish) {
      setFilteredProducts([]);
      return;
    }

    const filteredProducts = products.filter(
      (product) => product.subCategory.name === selectedFish.name
    );

    setFilteredProducts(filteredProducts);
  };

  const handleGramChange = (e) => {
    const selectedGuid = e.target.value;
    const selectedGram = gram.find((gram) => gram.guid === selectedGuid);

    if (!selectedGram) {
      setFilteredProducts([]);
      return;
    }

    const filteredProducts = products.filter((product) =>
      product.variants.some(
        (variant) =>
          parseFloat(variant.grams?.weight) === parseFloat(selectedGram.weight)
      )
    );

    const filteredProductsWithVariants = filteredProducts.map((product) => {
      return {
        ...product,
        variants: product.variants.filter(
          (variant) =>
            parseFloat(variant.grams?.weight) ===
            parseFloat(selectedGram.weight)
        ),
      };
    });

    setFilteredProducts(filteredProductsWithVariants);
  };

  return (
    <>
      <div className={styles.Products}>
        <h2>PRODUCT</h2>
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3 productTab"
        >
          <Tab
            eventKey="home"
            title={categoryname.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
          >
            <div className={styles.tableBorder}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="box">
                      <FormControl fullWidth className={styles.formControl}>
                        <InputLabel
                          variant="standard"
                          htmlFor="uncontrolled-native"
                          className={styles.inputLabel}
                        >
                          Size
                        </InputLabel>
                        <NativeSelect
                          style={{ color: "#fff" }}
                          // value={selectedCategory}
                          // onChange={handleCategoryChange}
                          onChange={handleGramChange}
                          inputProps={{
                            name: "categories",
                            id: "uncontrolled-native",
                          }}
                        >
                          <option
                            style={{ display: "none" }}
                            value={0}
                          ></option>
                          {gram.map((item, index) => (
                            <option key={item.guid} value={item.guid}>
                              {item.weight}
                            </option>
                          ))}
                          {/* {categories.map((category, index) => (
                            <option key={index} value={category}>
                              {category}
                            </option>
                          ))} */}
                        </NativeSelect>
                      </FormControl>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="box">
                      <FormControl className={styles.formControl} fullWidth>
                        <InputLabel
                          variant="standard"
                          htmlFor="uncontrolled-native"
                          className={styles.inputLabel}
                        >
                          Color
                        </InputLabel>
                        <NativeSelect
                          style={{ color: "#fff" }}
                          defaultValue={0}
                          inputProps={{
                            name: "categories",
                            id: "uncontrolled-native",
                          }}
                        >
                          <option
                            style={{ display: "none" }}
                            value={0}
                          ></option>
                          {products.map((product, index) => (
                            <option key={index}>
                              {product.features && product.features.color
                                ? product.features.color
                                : "No Color"}
                            </option>
                          ))}
                          {/* <option value={10}>Gold</option>
                          <option value={20}>Red</option>
                          <option value={30}>Black</option> */}
                        </NativeSelect>
                      </FormControl>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="box">
                      <FormControl className={styles.formControl} fullWidth>
                        <InputLabel
                          variant="standard"
                          htmlFor="uncontrolled-native"
                          className={styles.inputLabel}
                        >
                          Fish
                        </InputLabel>
                        <NativeSelect
                          style={{ color: "#fff" }}
                          defaultValue={0}
                          onChange={handleFishChange}
                          inputProps={{
                            name: "categories",
                            id: "uncontrolled-native",
                          }}
                        >
                          <option
                            style={{ display: "none" }}
                            value={0}
                          ></option>
                          {fish.map((item, index) => (
                            <option key={index} value={item.guid}>
                              {item.name}
                            </option>
                          ))}
                          {/* <option value={20}>Twenty</option> */}
                          {/* <option value={30}>Thirty</option> */}
                        </NativeSelect>
                      </FormControl>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="box">
                      <div className={styles.priceBox}>
                        <label className={styles.priceLabel} htmlFor="">
                          Price
                        </label>
                      </div>
                      <div className={styles.rangeBox}>
                        <MultiRangeSlider
                          min={0}
                          max={1000}
                          onChange={({ min, max }) => RangeChange(min, max)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Cards products={filteredProducts} /> /products filteredProductsla
            evez olunacaq oluncaq/
          </Tab>
          {/* <Tab eventKey="profile" title="Grocery"></Tab> */}
        </Tabs>

        <div className={styles.getInTouch}>
          <h2>Get in Touch with Us!</h2>
          <div className={styles.pEdit}>
            <p>
              Questions or thoughts about our caviar? Our BB Caviar team is
              ready to assist. Reach out to us for any inquiries or feedback –
              we're here to help and always eager to connect!
            </p>
          </div>
          <button className={styles.buttonHover}>Call us</button>
        </div>
      </div>
    </>
  );
}
