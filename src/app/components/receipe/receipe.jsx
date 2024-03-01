import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Receipe() {
  return (
    <>
      <div className={styles.Receipe}>
        <div className="container">
          <div className={styles.Up}>
            <div className="row">
              <div className="col-lg-7">
                <div style={{ paddingTop: "100px" }} className="box">
                  <h3>Receipe with caviar</h3>
                  <div className={styles.h2Edit}>
                    <h2>
                      Exquisite Caviar Recipes to Transform Your Culinary
                      Experience
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="box">
                  <div className={styles.boxImg}>
                    <Image
                      loading="lazy"
                      width={736}
                      height={366}
                      src="/assets/image/receipestock.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Down}>
            <div className="row">
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-3">
                    <div className={styles.downBoxLeft}>
                      <div className={styles.number}>
                        <h4>01</h4>
                        <h5>of 06</h5>
                      </div>
                      <div className={styles.line}></div>
                    </div>
                  </div>
                  <div style={{ position: "relative" }} className="col-lg-7">
                    <div className={styles.downBoxRight}>
                      <div className={styles.pEdit}>
                        <p>Omelet with Pressed Caviar and Sour Cream</p>
                      </div>
                      <div className={styles.omletImg}>
                        <Image
                          loading="lazy"
                          width={297}
                          height={198}
                          src="/assets/image/omlet1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-3">
                    <div className={styles.downBoxLeft}>
                      <div className={styles.number}>
                        <h4>01</h4>
                        <h5>of 06</h5>
                      </div>
                      <div className={styles.line}></div>
                    </div>
                  </div>
                  <div style={{ position: "relative" }} className="col-lg-8">
                    <div className={styles.downBoxRight}>
                      <div className={styles.pEdit}>
                        <p>
                          Crispy Potato Galette with Dill Cream, Sturgeon and
                          Caviar
                        </p>
                      </div>
                      <div className={styles.omletImg}>
                        <Image
                          loading="lazy"
                          width={297}
                          height={198}
                          src="/assets/image/omlet2.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-3">
                    <div className={styles.downBoxLeft}>
                      <div className={styles.number}>
                        <h4>01</h4>
                        <h5>of 06</h5>
                      </div>
                      <div className={styles.line}></div>
                    </div>
                  </div>
                  <div style={{ position: "relative" }} className="col-lg-8">
                    <div className={styles.downBoxRight}>
                      <div className={styles.pEdit}>
                        <p>Fancy Deviled Eggs with Caviar and Crème Fraîche</p>
                      </div>
                      <div className={styles.omletImg}>
                        <Image
                          loading="lazy"
                          width={297}
                          height={198}
                          src="/assets/image/omlet3.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`text-center`}>
          <Link href="/blini">
            {" "}
            <button className={styles.buttonHover}>See all</button>
          </Link>
        </div>
      </div>
    </>
  );
}
