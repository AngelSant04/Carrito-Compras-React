import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import Product from "../../interfaces/Product";
// import { useSelector } from "react-redux";

export default function ProductCard(props: Product) {
  const { id, title, color, price, image } = props
  // const store = useSelector(store => store)
  // console.log(store);
  
  return (
    <>
      <Link className={styles.productCard} to={"details/"+id}>
        <img
          className={styles.productImg}
          src={image}
          alt={id}
        />
        <div className={styles.productInfo}>
          <span className={styles.productTitle}>{title}</span>
          <span className={styles.productDescription}>{color}</span>
          <div className={styles.productPriceBlock}>
            <span className={styles.productPrice}>{price}</span>
            <span className={styles.productDiscount}>50% Off</span>
          </div>
          <div className={styles.productTaxPolicy}>
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </Link>
    </>
  );
}
