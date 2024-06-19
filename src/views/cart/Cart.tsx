import Banner from "../../components/banner/Banner";
import CartCard from "../../components/cartCard/CartCard";
import CardResume from "../../components/cardResume/CardResume";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import { useEffect, useState } from "react";
import Product from "../../interfaces/Product";

export default function Cart() {
  const [productosEnCarrito, setProductos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const products = JSON.parse(localStorage.getItem("cart")!);
      setProductos(products);
    }
  }, []);

  return (
    <>
      <NavBar />
      <Banner first="Mi" second="Carrito" />
      <main>
        <section className="flex flex-col">
          {productosEnCarrito.map((each: Product) => (
            <CartCard
              key={each.id}
              id = {each.id}
              titulo={each.title}
              foto={each.images![0]}
              descripcion={each.description}
              precio={each.price}
              cantidad={each.cantidad}
              color={each.colors![0]}
            />
          ))}
        </section>
        {/* <CartCard titulo="Ipad 14 pro" color="black" /> */}
        <CardResume total="800000" />
      </main>
      <Footer />
    </>
  );
}
