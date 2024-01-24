import React from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { add } from "../../Redux/CartSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Cards({ products }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleadd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className={styles.Cards}>
      <div className="container">
        {products.map((product, pIndex) => (
          <div className={`row ${styles.rowAll}`}>
            {product.variants.map((variant, vIndex) => (
              <div className="col-lg-3 col-12">
                <div key={vIndex} className={styles.box}>
                  <div className={styles.boxUp}>
                    {variant.product_attachments &&
                    variant.product_attachments.length > 0 ? (
                      <Image
                        onClick={() =>
                          router.push(`/productdetail/${product.guid}`)
                        }
                        width={289}
                        height={0}
                        src={variant.product_attachments[0].filePath}
                        alt={variant.product_attachments[0].altText}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                    <div className={styles.line}></div>
                  </div>
                  <div className={styles.boxDown}>
                    <div className={styles.boxDowncontent}>
                      <div className={styles.prNameEdit}>
                        <h3>{`${product.name} ${variant.grams.weight} gr`}</h3>
                      </div>
                      <div className={styles.priceEdit}>
                        <h3 className={styles.h3Edit}>{`$${variant.price}`}</h3>
                      </div>
                    </div>
                    <p onClick={() => handleadd(product)}>Add to cart +</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
