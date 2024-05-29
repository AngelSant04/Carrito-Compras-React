import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import styles from "./Detalle.module.css";

export default function Detalle() {
  return (
    <>
      <NavBar />
      <main>
        <div className={styles.detailsContainer}>
          <div id="details" className={styles.columnsContainer}>
            <section className={styles.productImagesBlock}>
              <div className={styles.productImages}>
                <img
                  className={styles.miniImg}
                  src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
                  alt="MacBook Pro 13'4"
                />
                <img
                  className={styles.miniImg}
                  src="https://i.postimg.cc/Y91Q1tYQ/mock2.jpg"
                  alt="MacBook Pro 13'4"
                />
              </div>
              <img
                className={styles.bigImg}
                id="big-img"
                src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
                alt="MacBook Pro 13'4"
              />
            </section>
            <div className={styles.productDescriptionBlock}>
              <h1 className={styles.productTitle}>MacBook Pro 13'4</h1>
              <form className={styles.productSelector}>
                <fieldset className={styles.productFieldset}>
                  <label className={styles.productLabel} htmlFor="color">
                    Color
                  </label>
                  <select
                    className={styles.productSelect}
                    // type="text"
                    // placeholder="Selecciona un color"
                    id="color"
                  >
                    <option value="Silver">Silver</option>
                  </select>
                </fieldset>
              </form>
              <div className={styles.productDescription}>
                <span className={styles.productLabel}>Descripción</span>
                <p>
                  Experience the power of creativity with the MacBook Pro 13'4.
                  Featuring 8GB of RAM and 512GB of storage, this laptop
                  provides the performance and storage capacity needed for
                  demanding tasks. The sleek design in silver and space gray
                  adds a touch of sophistication. The high-resolution Retina
                  display brings your visuals to life, whether you're editing
                  photos, creating videos, or simply browsing the web. With the
                  latest technology and a lightweight build, the MacBook Pro
                  13'4 is the perfect companion for professionals and creative
                  individuals alike.
                </p>
              </div>
            </div>
            <div className={styles.productCheckoutBlock}>
              <div className={styles.checkoutContainer}>
                <span className={styles.checkoutTotalLabel}>Total:</span>
                <h2 id="price" className={styles.checkoutTotalPrice}>
                  $750000
                </h2>
                <p className={styles.checkoutDescription}>
                  Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                  50711 haciendo la solicitud en AFIP.
                </p>
                <ul className={styles.checkoutPolicyList}>
                  <li>
                    <span className={styles.policyIcon}>
                      <img src="./truck.png" alt="Truck" />
                    </span>
                    <span className={styles.policyDesc}>
                      Agrega el producto al carrito para conocer los costos de
                      envío
                    </span>
                  </li>
                  <li>
                    <span className={styles.policyIcon}>
                      <img src="./plane.png" alt="Plane" />
                    </span>
                    <span className={styles.policyDesc}>
                      Recibí aproximadamente entre 10 y 15 días hábiles,
                      seleccionando envío normal
                    </span>
                  </li>
                </ul>
                <div className={styles.checkoutProcess}>
                  <div className={styles.top}>
                    <input type="number" min="1" value="1" />
                    <button type="button" className={styles.cartBtn}>
                      Añadir al Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.salesBlock}>
            <h2 className={styles.salesTitle}>Ofertas de la semana</h2>
            <div id="product-container" className={styles.productContainer}>
              <a className={styles.productCard} href="./details.html">
                <img
                  className={styles.productImg}
                  src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                  alt="Kindle Paperwhite"
                />
                <div className={styles.productInfo}>
                  <span className={styles.productTitle}>Kindle Paperwhite</span>
                  <span className={styles.productDescription}>Black</span>
                  <div className={styles.productPriceBlock}>
                    <span className={styles.productPrice}>100000</span>
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
                  src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                  alt="Kindle Paperwhite"
                />
                <div className={styles.productInfo}>
                  <span className={styles.productTitle}>Kindle Paperwhite</span>
                  <span className={styles.productDescription}>Black</span>
                  <div className={styles.productPriceBlock}>
                    <span className={styles.productPrice}>100000</span>
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
                  src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                  alt="Kindle Paperwhite"
                />
                <div className={styles.productInfo}>
                  <span className={styles.productTitle}>Kindle Paperwhite</span>
                  <span className={styles.productDescription}>Black</span>
                  <div className={styles.productPriceBlock}>
                    <span className={styles.productPrice}>100000</span>
                    <span className={styles.productDiscount}>50% Off</span>
                  </div>
                  <div className={styles.productTaxPolicy}>
                    Incluye impuesto País y percepción AFIP
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
