import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <main>
        <div className={styles.productContainer} id="products">
          <a className={styles.productCard} href="./details.html">
            <img
              className={styles.productImg}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles.productInfo}>
              <span className={styles.productTitle}>iPad Pro 12.9</span>
              <span className={styles.productDescription}>Silver</span>
              <div className={styles.productPriceBlock}>
                <span className={styles.productPrice}>900000</span>
                <span className={styles.productDiscount}>50% Off</span>
              </div>
              <div className={styles.productTaxPolicy}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={styles.productCard} href="./details.html">
            <img
              className={styles.productImg}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles.productInfo}>
              <span className={styles.productTitle}>iPad Pro 12.9</span>
              <span className={styles.productDescription}>Silver</span>
              <div className={styles.productPriceBlock}>
                <span className={styles.productPrice}>900000</span>
                <span className={styles.productDiscount}>50% Off</span>
              </div>
              <div className={styles.productTaxPolicy}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={styles.productCard} href="./details.html">
            <img
              className={styles.productImg}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles.productInfo}>
              <span className={styles.productTitle}>iPad Pro 12.9</span>
              <span className={styles.productDescription}>Silver</span>
              <div className={styles.productPriceBlock}>
                <span className={styles.productPrice}>900000</span>
                <span className={styles.productDiscount}>50% Off</span>
              </div>
              <div className={styles.productTaxPolicy}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={styles.productCard} href="./details.html">
            <img
              className={styles.productImg}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles.productInfo}>
              <span className={styles.productTitle}>iPad Pro 12.9</span>
              <span className={styles.productDescription}>Silver</span>
              <div className={styles.productPriceBlock}>
                <span className={styles.productPrice}>900000</span>
                <span className={styles.productDiscount}>50% Off</span>
              </div>
              <div className={styles.productTaxPolicy}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={styles.productCard} href="./details.html">
            <img
              className={styles.productImg}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles.productInfo}>
              <span className={styles.productTitle}>iPad Pro 12.9</span>
              <span className={styles.productDescription}>Silver</span>
              <div className={styles.productPriceBlock}>
                <span className={styles.productPrice}>900000</span>
                <span className={styles.productDiscount}>50% Off</span>
              </div>
              <div className={styles.productTaxPolicy}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={styles.productCard} href="./details.html">
            <img
              className={styles.productImg}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles.productInfo}>
              <span className={styles.productTitle}>iPad Pro 12.9</span>
              <span className={styles.productDescription}>Silver</span>
              <div className={styles.productPriceBlock}>
                <span className={styles.productPrice}>900000</span>
                <span className={styles.productDiscount}>50% Off</span>
              </div>
              <div className={styles.productTaxPolicy}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
