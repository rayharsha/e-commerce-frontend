
// import Hero from "../components/ui/Hero";
import Navbar from "../components/ui/Navbar";
import ProductGrid from "../products/ProductGrid";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            {/* <Hero /> */}
            <h1>Explore Products</h1>
            <ProductGrid />
        </div>
    );
};
export default Home;