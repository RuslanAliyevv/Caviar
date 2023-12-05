"use client";
import React from "react";
import styles from "./styles.module.css";
import Cards from "../components/Cards/card";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { noSSR } from "next/dynamic";
import { useState, useEffect } from "react";
export default function Products() {
  // const [products, setProducts] = useState([]);
  // const [selectedCategory,setSelectedCategory] = useState(null)

  // const getProducts = async () => {
  //   try {
  //     const response = await axios.get("https://fakestoreapi.com/products");
  //     const data = response.data;
  //     setProducts(data);
  //   } catch (error) {
  //     console.error("Hata oluştu:", error);
  //   }
  // }

  // useEffect(() => {
  //   getproducts();
  // }, []);

 
  return (
    <>
      <div className={styles.Products}>
        <h2>PRODUCT</h2>
        <div className={styles.tableBorder}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="box">
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                      className={styles.inputLabel}
                    >
                      Categories
                    </InputLabel>
                    <NativeSelect
                      style={{ color: "#fff" }}
                      defaultValue={0}
                      inputProps={{
                        name: "categories",
                        id: "uncontrolled-native",
                      }}
                    >
                      
                      <option style={{ display: "none" }} value={0}></option>
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </NativeSelect>
                  </FormControl>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box">
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                      className={styles.inputLabel}
                    >
                      Grams
                    </InputLabel>
                    <NativeSelect
                      style={{ color: "#fff" }}
                      defaultValue={0}
                      inputProps={{
                        name: "categories",
                        id: "uncontrolled-native",
                      }}
                    >
                      <option style={{ display: "none" }} value={0}></option>
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </NativeSelect>
                  </FormControl>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box">
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                      className={styles.inputLabel}
                    >
                      Price
                    </InputLabel>
                    <NativeSelect
                      style={{ color: "#fff" }}
                      defaultValue={0}
                      inputProps={{
                        name: "categories",
                        id: "uncontrolled-native",
                      }}
                    >
                      <option style={{ display: "none" }} value={0}></option>
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </NativeSelect>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Cards />

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
