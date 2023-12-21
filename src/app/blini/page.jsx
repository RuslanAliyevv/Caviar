import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
export default function Blini() {
  return (
    <>
      <div className={styles.Blini}>
        <h2>Receipes with caviar</h2>
        <div className={styles.tableBorder}>
          <div className={styles.h5Edit}>
            <h5>
              Immerse Your Senses in the Luxurious World of Caviar with Our
              Exclusive Recipes, Meticulously Curated to Transform Home Cooking
              into a Symphony of Indulgence
            </h5>
          </div>
        </div>
        <div className="container">
          <div className={styles.Down}>
            <div className={`row ${styles.rowAll}`}>
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
                  <div
                    style={{ position: "relative",  }}
                    className="col-lg-7"
                  >
                    <div className={styles.downBoxRight}>
                   
                      <div className={styles.pEdit}>
                        <p>Omelet with Pressed Caviar and Sour Cream</p>
                      </div>
                      <div className={styles.omletImg}>
                      <Image width={297} height={198} src="/assets/image/omlet1.png" alt="" />
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
                  <div style={{ position: "relative" }} className="col-lg-7">
                    <div className={styles.downBoxRight}>
                 
                      <div className={styles.pEdit}>
                        <p>Crispy Potato Galette with Dill Cream, Sturgeon and  Caviar</p>
                      </div>
                      <div className={styles.omletImg}>
                      <Image width={297} height={198} src="/assets/image/omlet2.png" alt="" />
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
                  <div style={{ position: "relative" }} className="col-lg-7">
                    <div className={styles.downBoxRight}>
                    
                      <div className={styles.pEdit}>
                        <p>Fancy Deviled Eggs with Caviar and Crème Fraîche</p>
                      </div>
                      <div className={styles.omletImg}>
                      <Image width={297} height={198} src="/assets/image/omlet3.png" alt="" />
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
                  <div style={{ position: "relative" }} className="col-lg-7">
                    <div className={styles.downBoxRight}>
                      
                      <div className={styles.pEdit}>
                        <p>Caviar and Cucumber Bites</p>
                      </div>
                      <div className={styles.omletImg}>
                      <Image width={297} height={198} src="/assets/image/omlet1.png" alt="" />
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
                  <div style={{ position: "relative" }} className="col-lg-7">
                    <div className={styles.downBoxRight}>
                      
                      <div className={styles.pEdit}>
                        <p>Keto Spinach Salmon Roulade with Caviar</p>
                      </div>
                      <div className={styles.omletImg}>
                      <Image width={297} height={198} src="/assets/image/omlet2.png" alt="" />
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
                  <div style={{ position: "relative" }} className="col-lg-7">
                    <div className={styles.downBoxRight}>
                
                      <div className={styles.pEdit}>
                        <p>3-Bite Hasselback Potatoes with Caviar</p>
                      </div>
                      <div className={styles.omletImg}>
                      <Image width={297} height={198} src="/assets/image/omlet3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
