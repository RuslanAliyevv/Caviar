import React from "react";
import CaviarIntro from "../components/caviarIntro/intro";
import AboutRm from "../components/aboutrm/aboutrm";
import Product from "../components/product/product";
import ChooseUs from "../components/chooseus/chooseus";
import ProductInfo from "../components/productinfo/productinfo";
import Dictionary from "../components/dictionary/dictionary";
import Blogs from "../components/blogs/blogs";
import AboutCn from "../components/aboutContent/aboutcontent";
import ContactFm from "../components/contactform/contactform";
import Receipe from "../components/receipe/receipe"
export default function Main() {
  return (
    <>
      <CaviarIntro />
      <AboutRm />
      <Product />
      <ChooseUs />
      <ProductInfo />
      <Dictionary />
      <Blogs />
      <AboutCn />
      <Receipe />
      <ContactFm />
    </>
  );
}
