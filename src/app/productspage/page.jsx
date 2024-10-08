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
import MultiRangeSlider from "../components/multirange/multirangeslider";
import Spinner from "../components/Spinner/spinner";
export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setproducts] = useState([]);
  const [categoryname, setCategoryname] = useState([]);
  const [fish, setFish] = useState([]);
  const [gram, setGram] = useState([]);
  const [selectedFish, setSelectedFish] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [gramResponse, fishResponse, categoryResponse, productsResponse] =
          await Promise.all([
            axios.get(
              "https://bbcaviar.com/api/v1/product-gram/8fc4b1a4-28dd-49bc-ab4c-b2bb71a8c843"
            ),
            axios.get(
              "https://bbcaviar.com/api/v1/sub-category/8fc4b1a4-28dd-49bc-ab4c-b2bb71a8c843"
            ),
            axios.get("https://bbcaviar.com/api/v1/category/"),
            axios.get(
              "https://bbcaviar.com/api/v1/products/main-category/8fc4b1a4-28dd-49bc-ab4c-b2bb71a8c843"
            ),
          ]);

        setGram(gramResponse.data);
        setFish(fishResponse.data);
        setCategoryname(categoryResponse.data);
        setproducts(productsResponse.data);
        setFilteredProducts(productsResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const RangeChange = (min, max) => {
    const filteredProducts = products.filter((product) => {
      const minPrice = product.variants.reduce((minPrice, currentVariant) => {
        const price = parseFloat(currentVariant.price);
        return price < parseFloat(minPrice) ? price : minPrice;
      }, Infinity);

      if (minPrice > max || minPrice < min) {
        return false;
      }
      const fishMatch =
        selectedFish === "all" || product.subCategory.name === selectedFish;
      const colorMatch =
        selectedColor === "all" || product.features.color === selectedColor;
      return fishMatch && colorMatch;
    });
    setFilteredProducts(filteredProducts);
  };

  useEffect(() => {
    const filterProducts = () => {
      let filtered = [...products];

      if (selectedFish !== "all") {
        filtered = filtered.filter(
          (product) => product.subCategory.name === selectedFish
        );
      }
      if (selectedColor !== "all") {
        filtered = filtered.filter(
          (product) => product.features.color === selectedColor
        );
      }
      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [selectedFish, selectedColor, products]);

  const handleFishChange = (e) => {
    setSelectedFish(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <>
      {isLoading && <Spinner />}
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
              <div className={`container ${styles.container}`}>
                <div className="row">
                  <div className="col-lg-4">
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
                          onChange={handleColorChange}
                          inputProps={{
                            name: "categories",
                            id: "uncontrolled-native",
                          }}
                        >
                          <option value="all">All</option>
                          <option value="gold">gold</option>
                          <option value="black">black</option>
                          <option value="red">red</option>
                        </NativeSelect>
                      </FormControl>
                    </div>
                  </div>

                  <div className="col-lg-4">
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
                          <option value="all">All</option>
                          {fish.map((item, index) => (
                            <option key={index} value={item.name}>
                              {item.name}
                            </option>
                          ))}
                        </NativeSelect>
                      </FormControl>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="box">
                      <div className={styles.priceBox}>
                        <label className={styles.priceLabel} htmlFor="">
                          Price
                        </label>
                      </div>
                      <div className={styles.rangeBox}>
                        <MultiRangeSlider
                          min={0}
                          max={5000}
                          onChange={({ min, max }) => RangeChange(min, max)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Cards products={filteredProducts} />
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
          <button className={styles.buttonHover}>Contact now</button>
        </div>
      </div>
    </>
  );
}
