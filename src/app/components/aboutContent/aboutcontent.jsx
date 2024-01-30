"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { Paper, Box, Typography, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";


const exampleItems = [
  {
    name: "Jane Smith",
    description: " I must say, BB Caviar has completely exceeded my expectations. The caviar is simply exceptional in taste and quality. Knowing that it's sourced sustainably makes the experience even more satisfying.",
  },
  {
    name: "Second Item",
    description: "Description for second item",
  },
  {
    name: "Third Item",
    description: "Description for second item",
  },
];
export default function Aboutcn() {
  return (
    <>
      <div className={styles.AboutCn}>
        <h2 className="text-center">See what our clients say about us</h2>
        <Carousel
          animation="slide"
          indicators={true}
          interval={2000}
          navButtonsAlwaysVisible={true}
          navButtonsAlwaysInvisible={false}
          cycleNavigation={true}
          fullHeightHover={false}
          sx={{
            maxWidth: "600px",
            flexGrow: 1,
            margin: "auto",
            mt: 5,
          }}
        >
          {exampleItems.map((item, i) => (
            <div key={i} className={styles.content}>
              <div className={styles.pEdit}>
                <p>
                 {item.description}
                </p>
              </div>
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
              <div className={styles.Smith}>
                <h5>{item.name}</h5>
              </div>
            </div>
          ))}
        </Carousel>

        <div className={styles.subtract}>{/* //For Image */}</div>
      </div>
    </>
  );
}
