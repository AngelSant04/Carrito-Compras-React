import styles from "./Thumbs.module.css";

export default function Thumbs(props) {

  const { product } = props
  
  return (
    <>
      <section className={styles.productImagesBlock}>
        <div className={styles.productImages}>
          <img
            className={styles.miniImg}
            src={product.images[0]}
            alt={product.title}
          />
          <img
            className={styles.miniImg}
            src={product.images[1]}
            alt={product.title}
          />
        </div>
        <img
          className={styles.bigImg}
          id="big-img"
          src={product.images[0]}
          alt={product.title}
        />
      </section>
    </>
  );
}
