import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import ProductCard from "../../components/productCard/ProductCard";
import styles from "./Home.module.css";
import products from '../../assets/products.js';

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner first="Tecnologia" second="Renovada"/>
      <main>
        <div className={styles.productContainer} id="products">
          {
            products.map((e) => (
              <ProductCard 
                key={e.id} 
                id={e.id}
                title={e.title}
                price={e.price}
                color={e.colors[0]}
                image={e.images[0]} 
              />
            ))
          }
        </div>
      </main>
      <Footer />
    </>
  );
}
