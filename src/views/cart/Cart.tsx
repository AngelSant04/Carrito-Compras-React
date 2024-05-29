import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import styles from "./Cart.module.css";

export default function Cart() {
  return <>
    <NavBar />
    {/* <section className="hero-section">
      <article className="hero-title">
        <span className="hero-span">mi</span>
        <span className="hero-span">carrito</span>
      </article>
    </section> */}
    <Banner />
    <main>
      <article className={styles.productCart}>
        <img className={styles.productImg} src="https://i.postimg.cc/kX8PKZpq/ipad.jpg" alt="ipad" />
        <div className={styles.productDetails}>
          <strong className={styles.productTitle}>iPad Pro 13</strong><span className={styles.productDescription}>- Silver</span>
          <p className={styles.productDescription}>The iPad Pro 13 is a stunning piece of technology, boasting a large 12.9-inch Retina display with ProMotion technology. With 256GB of storage, this iPad provides ample space for all your files, apps, and multimedia content. The sleek and slim design, combined with the silver color, gives it a sophisticated look. Enjoy seamless connectivity with the WiFi feature. Capture your memorable moments with the high-quality camera and relive them on the impressive screen. Whether you're a professional artist, student, or just someone who appreciates cutting-edge technology, the iPad Pro 12.9 is a versatile device that meets all your needs.</p>
          <input className={styles.productInput} type="number" name="quantity" value="1" min="1" id="P7Q8R90" />
        </div>
        <strong className={styles.price}>AR$ $800000</strong>
      </article>
      <div className={styles.cartResume}>
        <div className={styles.cartData}>
          <h2 className={styles.cartTitle}><span>Resumen</span><span>del</span><span>pedido</span></h2>
          <div className={styles.cartTotal}>
            <h3>Total</h3>
            <strong className={styles.cartPrice}>$800000</strong>
          </div>
          <small className={styles.cartTax}>Incluye impuesto PAIS y percepción AFIP.</small>
        </div>
        <button className={styles.cartBtn} id="buy" type="button">COMPRAR</button>
      </div>
    </main>
    <Footer />
  </>;
}
