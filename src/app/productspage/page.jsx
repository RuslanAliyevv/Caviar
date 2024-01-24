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
  const handleRangeChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setproducts] = useState([]);
  const [categoryname, setCategoryname] = useState([]);

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
      const response = await axios.get("http://68.183.53.2:3000/products");
      const data = response.data;
      // console.log(response.data);
      setproducts(data);
    } catch (error) {
      console.error("Error Message:", error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  const categories = Array.from(new Set(products.map((res) => res.category)));

  // Category filter

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
  // const [filteredProducts, setFilteredProducts] = useState([]);
  // const RangeChange = (min, max) => {
  //   const filteredProducts = products.filter(
  //     (product) => product.price >= min && product.price <= max
  //   );
  //   setFilteredProducts(filteredProducts);
  // };
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
            title={categoryname.map((item,index) => (
              <div key={index}>
                {item.name}
              </div>
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
                          inputProps={{
                            name: "categories",
                            id: "uncontrolled-native",
                          }}
                        >
                          <option
                            style={{ display: "none" }}
                            value={0}
                          ></option>
                          <option value="All">disable</option>
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
                          <option value={10}>disable</option>
                          {/* <option value={20}>Twenty</option> */}
                          {/* <option value={30}>Thirty</option> */}
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
                          inputProps={{
                            name: "categories",
                            id: "uncontrolled-native",
                          }}
                        >
                          <option
                            style={{ display: "none" }}
                            value={0}
                          ></option>
                          <option value={10}>disable</option>
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
                          onChange={({ min, max }) =>
                            `min = ${min}, max = ${max}`
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Cards products={products} /> /products filteredProductsla evez
            olunacaq oluncaq/
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
