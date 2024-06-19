import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import styles from "./Detalle.module.css";
// import products from "../../assets/products.js";
import { Link, useParams } from "react-router-dom";
import Thumbs from "../../components/thumbs/Thumbs.js";
import Description from "../../components/description/Description.js";
import Checkout from "../../components/checkout/Checkout.js";
import Product from "../../interfaces/Product.js";
// import ProductCard from "../../interfaces/ProductCard.js";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useFetch.js";

export default function Detalle() {
  const [products, setProducts] = useState<Product[]>([]);
  const { data } = useAxios<Product[]>({
    url: "/products.json",
    method: "GET",
  });
  
  const { id } = useParams();
  const [productEncontrado, setProductoEncontrado] = useState<Product>({
    id: "",
    title: "",
    price: 0,
    images: [],
    colors: [],
  });

  const [onsale, setOnSale] = useState<Product[]>([]);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  useEffect(() => {
    if (id && products.length > 0) {
      const detailProduct: Product = products.find(
        (each) => each.id === id
      )!;
      setProductoEncontrado(detailProduct);

      const filterProducts: Array<Product> = products.filter(
        (each) => each.onsale
      );
      setOnSale(filterProducts);
    }
  }, [id, products]);

  return (
    <>
      <NavBar />
      <main>
        <div className={styles.detailsContainer}>
          <div id="details" className={styles.columnsContainer}>
            <Thumbs product={productEncontrado} />
            <Description product={productEncontrado} />
            <Checkout product={productEncontrado} />
          </div>
          <div className={styles.salesBlock}>
            <h2 className={styles.salesTitle}>Ofertas de la semana</h2>
            <div id="product-container" className={styles.productContainer}>
              {onsale
                .map((e: Product) => {
                  return (
                    <Link
                      key={e.id}
                      className={styles.productCard}
                      to={"/details/" + e.id}
                    >
                      <img
                        className={styles.productImg}
                        src={e.images![0]}
                        alt={e.title}
                      />
                      <div className={styles.productInfo}>
                        <span className={styles.productTitle}>{e.title}</span>
                        <span className={styles.productDescription}>Black</span>
                        <div className={styles.productPriceBlock}>
                          <span className={styles.productPrice}>{e.price}</span>
                          <span className={styles.productDiscount}>
                            50% Off
                          </span>
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
