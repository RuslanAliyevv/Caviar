import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
export default function Aboutcn() {
  return (
    <>
      <div className={styles.AboutCn}>
        <h2 className="text-center">See what our clients say about us</h2>
        <div className={styles.content}>
          <div className={styles.pEdit}>
            <p>
              I must say, BB Caviar has completely exceeded my expectations. The
              caviar is simply exceptional in taste and quality. Knowing that
              it's sourced sustainably makes the experience even more
              satisfying.
            </p>
          </div>
          <div className={styles.spanEdit}>
            <span>
              <Image width={20} height={20} src="/assets/image/staricon.png" alt="" />
            </span>
            <span>
            <Image width={20} height={20} src="/assets/image/staricon.png" alt="" />

            </span>
            <span>
            <Image width={20} height={20} src="/assets/image/staricon.png" alt="" />

            </span>
            <span>
            <Image width={20} height={20} src="/assets/image/staricon.png" alt="" />

            </span>
            <span>
            <Image width={20} height={20} src="/assets/image/staricon.png" alt="" />

            </span>
          </div>
          <div className={styles.Smith}>
            <h5>Jane Smith</h5>
          </div>
          <div className={styles.subtract}>{/* //For Image */}</div>
        </div>
      </div>
    </>
  );
}
