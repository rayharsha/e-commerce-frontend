import { Navigate, useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Big Summer Sale 🔥</h1>
                <p>Up to 50% OFF on all products</p>
                <button onClick={() => navigate("/")}>Shop Now</button>
            </div>
        </div>
    );
};

export default Hero;