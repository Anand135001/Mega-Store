import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";

const Home = () => {

  const addtoCartHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>Latest products
        <Link to="/search" className="find-more">More</Link>
      </h1> 

      <main>
        <ProductCard 
          productId="#nfwk23334"
          name="Earbirds" 
          price={2133} 
          stock={23} 
          handler={addtoCartHandler}
          photo="https://m.media-amazon.com/images/I/61XvYOrqVeL._SX522_.jpg"
        />
      </main>
    </div>
  )
}

export default Home;