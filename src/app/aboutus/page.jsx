import React from "react";
import styles from "./styles.module.css";
export default function About() {
  return (
    <>
      <div className={styles.About}>
        <h2 className="text-center">ABOUT US</h2>
        <div className={styles.img}></div>
        <div className={styles.overlay}></div>
      </div>
      <section>
        <div className={styles.aboutContent}>
          <div className={styles.aboutcnbox}>
            <div className={styles.h4Edit}>
              <h4>It is a long caviar established fact reader</h4>
            </div>
            <div className={styles.pEdit}>
              <p>
                Welcome to the world of BB Caviar, where we celebrate the art of
                luxury and the tradition of excellence. Our journey through the
                ages has cultivated a rich heritage, deeply rooted in the
                pursuit of the finest caviar. At BB Caviar, we don't just sell a
                product; we offer an experience - a blend of taste, tradition,
                and innovation.
              </p>
            </div>
            <div className={styles.pEdit}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting
              </p>
              <h4>Our Mission</h4>
              <p>
                Our mission is to enchant your palate with the world's finest
                caviar, crafted with care and conscience. We are devoted to
                sourcing our caviar sustainably, ensuring every grain reflects
                our commitment to quality and respect for nature. Our goal is to
                create memorable culinary experiences that resonate with the
                connoisseur in you while contributing positively to the
                environment.
              </p>
              <h4>Our Values</h4>
              <p>
                {" "}
                At the heart of BB Caviar lies a set of core values that guide
                every aspect of our business, from sourcing to serving our
                esteemed customers. These principles not only define who we are
                but also shape the exceptional experiences we deliver: Integrity
                and Authenticity: We believe in honest and transparent
                practices, ensuring the authenticity and purity of every caviar
                pearl we offer. Uncompromised Quality: Our relentless pursuit of
                perfection is evident in the taste, texture, and quality of our
                caviar, setting new standards in the industry. Sustainable
                Elegance: We intertwine sustainability with luxury, ensuring our
                harvesting practices contribute to the conservation of marine
                life and ecosystems. Customer Centricity: Your satisfaction is
                our priority. We strive to deliver not just caviar, but an
                experience that delights and exceeds expectations. Join us at BB
                Caviar, where every jar tells a story of tradition, quality, and
                a journey towards sustainable luxury.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
