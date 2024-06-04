import { useState, useEffect, useRef } from "react";
import styles from "./Checkout.module.css";

export default function Checkout(props) {
  const { product: productEncontrado } = props;
  const [cantidad, setCantidad] = useState(1);
  const [button, setButton] = useState(false);

  // let productsInStorage: any = [];

  const units = useRef(1);

  // useEffect(() => {
  //   crearCart();
  //   validateProductInCart();
  // }, []);

  useEffect(() => {
    let productsOnCart = [];
    if (localStorage.getItem("cart")) {
      productsOnCart = JSON.parse(localStorage.getItem("cart")!);
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    const one: any = productsOnCart.find(
      (item: any) => item.id === productEncontrado.id
    );
    if (one) {
      setCantidad(one.cantidad);
      setButton(true);
    } else {
      setCantidad(1);
      setButton(false);
    }
  }, [productEncontrado.id]);

  // useEffect(() => {
  //   crearCart();
  //   addCantidadProducto();
  // }, [cantidad]);

  // const crearCart = () => {
  //   !localStorage.getItem("cart")
  //     ? localStorage.setItem("cart", JSON.stringify([]))
  //     : (productsInStorage = JSON.parse(localStorage.getItem("cart")!));
  // };

  // const validateProductInCart = () => {
  //   const existe = productsInStorage.find(
  //     (each: any) => each.id === productEncontrado.id
  //   );
  //   if (existe) {
  //     setButton(true);
  //     setCantidad(existe.cantidad);
  //   }
  // };

  // const addCantidadProducto = () => {
  //   const existe = productsInStorage.find((each:any) => each.id === productEncontrado.id);
  //   if (existe) {
  //     setCantidad(Number(units.current.value));
  //   }
  // }

  // const cambiosCantidad = (event) => {
  //   setCantidad(event?.target.value);
  // };

  const agregarProducto = () => {
    let productsOnCart = [];
    if (localStorage.getItem("cart")) {
      productsOnCart = JSON.parse(localStorage.getItem("cart")!);
    }
    const one = productsOnCart.find((each:any) => each.id === productEncontrado.id);
    if (!one) {
      productEncontrado.cantidad = Number(units.current.value);
      productsOnCart.push(productEncontrado);
      setButton(true);
    } else {
      productsOnCart = productsOnCart.filter(
        (each:any) => each.id !== productEncontrado.id
      );
      setButton(false);
    }
    localStorage.setItem("cart", JSON.stringify(productsOnCart));
    // const existe = productsInStorage.find(
    //   (each: any) => each.id === productEncontrado.id
    // );
    // if (!existe) {
    //   productEncontrado.cantidad = cantidad;
    //   productsInStorage.push(productEncontrado);
    //   setButton(true);
    // } else {
    //   productsInStorage = productsInStorage.filter(
    //     (each: any) => each.id !== productEncontrado.id
    //   );
    //   setButton(false);
    // }
    // localStorage.setItem("cart", JSON.stringify(productsInStorage));
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
                // defaultValue={cantidad}
                value={cantidad}
                ref={units}
                // onChange={cambiosCantidad}
                onChange={() => setCantidad(Number(units.current.value))}
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
