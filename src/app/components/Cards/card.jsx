import React from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { add } from "../../Redux/CartSlice";


export default function Cards({products}) {
  const dispatch = useDispatch();
  const handleadd = (product) => {
    dispatch(add(product));
  };
  return (
    <div className={styles.Cards}>
      <div className="container">
        <div className={`row ${styles.rowAll}`}>
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-12">
            <div className={styles.box}>
              <div className={styles.boxUp}>
                <img src={product.imageUrl} alt="" />
                <div className={styles.line}></div>
              </div>
              <div className={styles.boxDown}>
                <h3>{product.name}</h3>
                <h3 className={styles.h3Edit}>{product.price}</h3>
              </div>
              <p onClick={()=>handleadd(product)}>Add to cart +</p>
            </div>
          </div>
          ))} 
          <div className="col-lg-3 col-12">
            <div className={styles.box}>
              <div className={styles.boxUp}>
                <img src="/assets/image/product2.png" alt="" />
                <div className={styles.line}></div>
              </div>
              <div className={styles.boxDown}>
                <h3>Product Name</h3>
                <h3 className={styles.h3Edit}>$60.00</h3>
              </div>
              <p>Add to cart +</p>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className={styles.box}>
              <div className={styles.boxUp}>
                <img src="/assets/image/product3.png" alt="" />
                <div className={styles.line}></div>
              </div>
              <div className={styles.boxDown}>
                <h3>Product Name</h3>
                <h3 className={styles.h3Edit}>$60.00</h3>
              </div>
              <p>Add to cart +</p>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className={styles.box}>
              <div className={styles.boxUp}>
                <img src="/assets/image/product4.png" alt="" />
                <div className={styles.line}></div>
              </div>
              <div className={styles.boxDown}>
                <h3>Product Name</h3>
                <h3 className={styles.h3Edit}>$60.00</h3>
              </div>
              <p>Add to cart +</p>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className={styles.box}>
              <div className={styles.boxUp}>
                <img src="/assets/image/product4.png" alt="" />
                <div className={styles.line}></div>
              </div>
              <div className={styles.boxDown}>
                <h3>Product Name</h3>
                <h3 className={styles.h3Edit}>$60.00</h3>
              </div>
              <p>Add to cart +</p>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className={styles.box}>
              <div className={styles.boxUp}>
                <img src="/assets/image/product1.png" alt="" />
                <div className={styles.line}></div>
              </div>
              <div className={styles.boxDown}>
                <h3>Product Name</h3>
                <h3 className={styles.h3Edit}>$60.00</h3>
              </div>
              <p>Add to cart +</p>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className={styles.box}>
              <div className={styles.boxUp}>
                <img src="/assets/image/product2.png" alt="" />
                <div className={styles.line}></div>
              </div>
              <div className={styles.boxDown}>
                <h3>Product Name</h3>
                <h3 className={styles.h3Edit}>$60.00</h3>
              </div>
              <p>Add to cart +</p>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className={styles.box}>
              <div className={styles.boxUp}>
                <img src="/assets/image/product3.png" alt="" />
                <div className={styles.line}></div>
              </div>
              <div className={styles.boxDown}>
                <h3>Product Name</h3>
                <h3 className={styles.h3Edit}>$60.00</h3>
              </div>
              <p>Add to cart +</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
