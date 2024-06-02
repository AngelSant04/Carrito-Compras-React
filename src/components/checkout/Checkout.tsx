import { useState, useEffect } from "react";
import styles from "./Checkout.module.css";

export default function Checkout(props) {
  const { product: productEncontrado } = props;
  const [cantidad, setCantidad] = useState(1);
  const [button, setButton] = useState(false);

  let productsInStorage : any = [];

  useEffect(() => {
    crearCart();
    validateProductInCart();
  }, []); 

  const crearCart = () => {
    !localStorage.getItem("cart")
    ? localStorage.setItem("cart", JSON.stringify([]))
    : (productsInStorage = JSON.parse(localStorage.getItem("cart")!));
  }

  const validateProductInCart = () => {
    const existe = productsInStorage.find((each:any) => each.id === productEncontrado.id);
    if (existe) {
      setButton(true);
    }
  }

  const cambiosCantidad = (event) => {
    setCantidad(event?.target.value);
  };

  const agregarProducto = () => {
    const existe = productsInStorage.find((each:any) => each.id === productEncontrado.id);
    if (!existe) {
      productsInStorage.push(productEncontrado);
      setButton(true);
    } else {
      productsInStorage = productsInStorage.filter(
        (each:any) => each.id !== productEncontrado.id
      );
      setButton(false);
    }
    localStorage.setItem("cart", JSON.stringify(productsInStorage));
  };

  return (
    <>
      <div className={styles.productCheckoutBlock}>
        <div className={styles.checkoutContainer}>
          <span className={styles.checkoutTotalLabel}>Total:</span>
          <h2 id="price" className={styles.checkoutTotalPrice}>
            ${(productEncontrado.price * cantidad).toLocaleString()}
          </h2>
          <p className={styles.checkoutDescription}>
            Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
            haciendo la solicitud en AFIP.
          </p>
          <ul className={styles.checkoutPolicyList}>
            <li>
              <span className={styles.policyIcon}>
                <img src="../../../public/truck.png" alt="Truck" />
              </span>
              <span className={styles.policyDesc}>
                Agrega el producto al carrito para conocer los costos de envío
              </span>
            </li>
            <li>
              <span className={styles.policyIcon}>
                <img src="../../../public/plane.png" alt="Plane" />
              </span>
              <span className={styles.policyDesc}>
                Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando
                envío normal
              </span>
            </li>
          </ul>
          <div className={styles.checkoutProcess}>
            <div className={styles.top}>
              <input
                type="number"
                min="1"
                defaultValue={cantidad}
                onChange={cambiosCantidad}
              />
              <button
                type="button"
                className={!button ? styles.cartBtn : styles.cartBtnBlack}
                onClick={agregarProducto}
              >
                {!button ? "Añadir al Carrito" : "Remover del Carrito"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
