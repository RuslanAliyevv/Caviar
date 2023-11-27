import React from "react";
import styles from "./styles.module.css";

export default function ChooseUs() {
  return (
    <>
      <div className={styles.ChooseUs}>
        <h2 className="text-center">Why choose us</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className={styles.box}>
                <div className={styles.boxContent}>
                  <h5>Unmatched Quality</h5>
                  <img src="/assets/image/chooseline.png" alt="" />
                  <div className={styles.pEdit}>
                    <p>
                      Get ready to savor caviar like you've never experienced
                      before, thanks to BB Caviar. We're on a mission to source
                      the absolute best caviar, delivering an unmatched level of
                      quality that's simply exceptional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.box}>
                <div className={styles.boxContent}>
                  <h5>Dedication to Sustainability</h5>
                  <img src="/assets/image/chooseline.png" alt="" />
                  <div className={styles.pEdit}>
                    <p>
                      Sustainability is our guiding principle. With every
                      delightful bite of caviar, you can indulge guilt-free,
                      thanks to our eco-conscious practices that not only
                      guarantee exceptional taste but also safeguard sturgeon
                      populations and secure the future of caviar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.box}>
                <div className={styles.boxContent}>
                  <h5>Dedicated to Your Satisfaction</h5>
                  <img src="/assets/image/chooseline.png" alt="" />
                  <div className={styles.pEdit}>
                    <p>
                      When it comes to your satisfaction, we don't compromise.
                      Our team is dedicated to providing you with service that
                      goes above and beyond. We're here to guide you on your
                      caviar journey, making sure your experience is truly
                      extraordinary.
                    </p>
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
