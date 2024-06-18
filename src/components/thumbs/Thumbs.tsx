import { useState, useEffect } from "react";
import styles from "./Thumbs.module.css";
import ProductProp from "../../interfaces/ProductProp";

export default function Thumbs(props: ProductProp) {
  const { product } = props;

  const [thumb, setThumb] = useState(product.images![0] || "/mock1.jpg");

  useEffect(() => setThumb(product.images![0]), [product.id]);

  return (
    <>
      <section className={styles.productImagesBlock}>
        <div className={styles.productImages}>
          {product.images!.map((each) => (
            <img
              className={styles.miniImg}
              key={each}
              src={each}
              alt={product.title}
              onClick={() => setThumb(each)}
            />
          ))}

          {/* <img
            className={styles.miniImg}
            src={product.images[0]}
            alt={product.title}
          />
          <img
            className={styles.miniImg}
            src={product.images[1]}
            alt={product.title}
          /> */}
        </div>
        <img
          className={styles.bigImg}
          id="big-img"
          src={thumb}
          alt={product.title}
        />
      </section>
    </>
  );
}
