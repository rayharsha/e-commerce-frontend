import { useState } from "react";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false)
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log("clicked");
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
    navigate("/cart")
  }
  const handleBuyNow = (e) => {
    e.stopPropagation();
    navigate("/checkout", {
      state: { product }
    });
  };

  // const handleAddToCart = () => {
  //   navigate("/checkout"); // temporary flow (mentor requirement)
  // };

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <div className="actions" onClick={(e) => e.stopPropagation()}>
        <Button onClick={handleBuyNow}>Buy Now</Button>
        <Button variant="secondary" onClick={handleAddToCart}>{added ? "Added" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;