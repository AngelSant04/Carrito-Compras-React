import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import styles from "./Detalle.module.css";
import products from "../../assets/products.js";
import { Link, useParams } from "react-router-dom";

export default function Detalle() {
  const { id } = useParams();

  const productEncontrado = products.find((e) => e.id == id);

  console.log(productEncontrado);

  const cambiosCantidad = (event) => {
    console.log(event);
  };

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
                  src={productEncontrado.images[0]}
                  alt={productEncontrado.title}
                />
                <img
                  className={styles.miniImg}
                  src={productEncontrado.images[1]}
                  alt={productEncontrado.title}
                />
              </div>
              <img
                className={styles.bigImg}
                id="big-img"
                src={productEncontrado.images[0]}
                alt={productEncontrado.title}
              />
            </section>
            <div className={styles.productDescriptionBlock}>
              <h1 className={styles.productTitle}>{productEncontrado.title}</h1>
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
                    {productEncontrado.colors.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </fieldset>
              </form>
              <div className={styles.productDescription}>
                <span className={styles.productLabel}>Descripción</span>
                <p>{productEncontrado.description}</p>
              </div>
            </div>
            <div className={styles.productCheckoutBlock}>
              <div className={styles.checkoutContainer}>
                <span className={styles.checkoutTotalLabel}>Total:</span>
                <h2 id="price" className={styles.checkoutTotalPrice}>
                  ${productEncontrado.price}
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
                    <input
                      type="number"
                      min="1"
                      value="1"
                      onChange={cambiosCantidad}
                    />
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
              {products.filter((product) => product.onsale == true).map(e => {
                return (
                  <Link className={styles.productCard} to={"details/"+e.id}>
                    <img
                      className={styles.productImg}
                      src= {e.images[0]}
                      alt={e.title}
                    />
                    <div className={styles.productInfo}>
                      <span className={styles.productTitle}>
                        {e.title}
                      </span>
                      <span className={styles.productDescription}>Black</span>
                      <div className={styles.productPriceBlock}>
                        <span className={styles.productPrice}>{e.price}</span>
                        <span className={styles.productDiscount}>50% Off</span>
                      </div>
                      <div className={styles.productTaxPolicy}>
                        Incluye impuesto País y percepción AFIP
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
