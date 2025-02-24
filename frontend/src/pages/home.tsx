import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <section></section>

      <h1>Latest products
        <Link to="/search" className="findmore">More</Link>
      </h1> 

      <main></main>
    </div>
  )
}

export default Home;