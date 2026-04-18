import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products";
import { useState } from "react";
import "../style/ProductDetails.css";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = products.find((p) => p.id === Number(id));

    // const [selectedSize, setSelectedSize] = useState(null);
    // const [selectedColor, setSelectedColor] = useState(null);
    const [size, setSize] = useState();
    const [color, setColor] = useState();
    if (!product) return <h2>Product not found</h2>;

    const handleAddToCart = () => {
        if (!size || !color) {
            alert("Please select size amd color");
            return;
        }
        addToCart({
            ...product,
            selectedSize: size,
            selectedColor: color,
        })
    }
    const handleBuyNow = () => {
        if (!size || !color) {
            alert("Please select size and color")
            return;
        }
        navigate("/checkout", {
            state: {
                product: {
                    ...product,
                    selectedSize: size,
                    selectedColor: color,
                }
            }
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
                            {product.sizes.map((s) => (
                                <button
                                    key={s}
                                    className={size === s? "active" : ""}
                                    onClick={() => setSize(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Colors */}
                    <div className="section">
                        <h4>Select Color</h4>
                        <div className="options">
                            {product.colors.map((c) => (
                                <button
                                    key={c}
                                    className={color === c ? "active" : ""}
                                    onClick={() => setColor(c)}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* {product.sizes.map((s) => (
                        <button
                            key={s} className={size === s ? "active" : ""} onClick={() => setSize(s)}>{s}</button>
                    ))} */}
                    <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;