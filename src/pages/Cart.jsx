import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../style/Cart.css"

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();

    return (
        <div className="cart">
            <h1>Your Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div className="cart-item" key={item.id}>

                            <img src={item.image} alt={item.name}
                                onClick={() => navigate(`/product/${item.id}`, {
                                    state: { product: item },
                                })} />

                            <div className="cart-info" onClick={() => navigate(`/product/${item.id}`, {
                                state: { product:item },
                            })}>
                                <h3>{item.name}</h3>
                                <p>₹{item.price}</p>
                            </div>

                            <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <button
                        className="checkout-btn"
                        onClick={() => navigate("/checkout")}
                    >
                        Proceed to Payment
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;