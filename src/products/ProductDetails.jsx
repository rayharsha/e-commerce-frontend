import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products";
import { useState } from "react";
import "../style/ProductDetails.css";

const ProductDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams();

    const product = products.find((p) => p.id === Number(id));

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [size, setSize] = useState();
    const [color, setColor] = useState();
    if (!product) return <h2>Product not found</h2>;

    const handleAddToCart = () => {
        if (!size || !color) {
            alert("Please select size amd color");
            return;
        }
        handleAddToCart({
            ...product,
            selectedSize: size,
            selectedColor: color,
        })
    }
    return (
        <div className="details">
            <div className="details-container">

                {/* Image */}
                <div className="image-box">
                    <img src={product.image} alt={product.name} />
                </div>

                {/* Info */}
                <div className="info-box">
                    <h2>{product.name}</h2>
                    <p className="price">₹{product.price}</p>

                    {/* Sizes */}
                    <div className="section">
                        <h4>Select Size</h4>
                        <div className="options">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    className={selectedSize === size ? "active" : ""}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Colors */}
                    <div className="section">
                        <h4>Select Color</h4>
                        <div className="options">
                            {product.colors.map((color) => (
                                <button
                                    key={color}
                                    className={selectedColor === color ? "active" : ""}
                                    onClick={() => setSelectedColor(color)}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="buy-btn" onClick={() => navigate("/checkout", {
                        state: {
                            ...product,
                            selectedSize: size,
                            selectedColor: color,

                        }
                    })}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;