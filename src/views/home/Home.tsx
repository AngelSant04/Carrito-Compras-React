import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import ProductCard from "../../components/productCard/ProductCard";
// import styles from "./Home.module.css";
// import products from '../../assets/products.js';
import Product from "../../interfaces/Product.js";
import useAxios from "../../hooks/useFetch.js";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const { data } = useAxios<Product[]>({
    url: '/products.json',
    method: 'GET',
  });

  useEffect(() => {
    if (data) {
      setProducts(data!);
    }
  }, [data]);

  return (
    <>
      <NavBar />
      <Banner first="Tecnologia" second="Renovada" />
      <main>
        <div
          className="w-[1080px] flex flex-wrap justify-between"
          id="products"
        >
          {products.map((e: Product) => (
            <ProductCard
              key={e.id}
              id={e.id}
              title={e.title}
              price={e.price}
              color={e.colors![0]}
              image={e.images![0]!}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
