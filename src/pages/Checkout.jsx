import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import "./Checkout.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { cart } = useCart();

    const singleProduct = location.state?.product;
    const items = singleProduct ? [singleProduct] : cart;
    const total = items.reduce((acc, item) => acc + item.price, 0);


    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    useEffect(() => {
        const saved = localStorage.getItem("addresses");
        if (saved) {
            setAddresses(JSON.parse(saved))
        }
    }, [])

    const [form, setForm] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
    })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSaveAddress = () => {
        const updated = [...addresses, form];
        setAddresses(updated);
        localStorage.setItem("addresses", JSON.stringify(updated));
        setSelectedAddress(updated.length - 1)
        setForm({
            name: "",
            phone: "",
            address: "",
            city: "",
            pincode: "",
        })
    }

    const handlePayment = () => {
        if (selectedAddress === null) {
            alert("Please select address");
            return;
        }

        setTimeout(() => {
            const selectedItems = items
            navigate("/success",{
                state:{
                   items:selectedItems, total, address: addresses[selectedAddress],
                }
        });
            // alert("payment successful")
        }, 1000)
    }
    return (
        <div className="checkout">
            <div className="checkout-left">
                <h3>Saved Addresses</h3>
                {addresses.length === 0 ? (
                    <p>No saved adress.</p>
                ) : (
                    <div className="address-list">
                        {
                            addresses.map((addr, i) => (
                                <div
                                    key={i}
                                    className={`address-card ${selectedAddress === i ? "active" : ""
                                        }`} onClick={() => setSelectedAddress(i)}>
                                    <p>{addr.name}</p>
                                    <p>{addr.address}</p>
                                    <p>{addr.city}-{addr.pincode}</p>
                                    <p>{addr.phone}</p>
                                </div>
                            ))
                        }
                    </div>
                )}

                {/* LEFT SIDE */}

                <h2>Add New Delivery Address</h2>

                <form className="address-form">
                    <input name="name" type="text" placeholder="Full Name" onChange={handleChange} />
                    <input name="phone" type="text" placeholder="Phone Number" onChange={handleChange} />
                    <input name="address" type="text" placeholder="Address Line" onChange={handleChange} />
                    <input name="city" type="text" placeholder="City" onChange={handleChange} />
                    <input name="pincode" type="text" placeholder="Pincode" onChange={handleChange} />
                </form>
                <button onClick={handleSaveAddress}>Save Address</button>
                <h3>Order Items</h3>

                {items.map((item) => (
                    <div key={item.id} className="checkout-item">
                        <img src={item.image} />
                        <div>
                            <p>{item.name}</p>
                            <span>₹{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="checkout-right">
                <h2>Order Summary</h2>

                <div className="summary">
                    <p>Items Total</p>
                    <span>₹{total}</span>
                </div>

                <div className="summary">
                    <p>Delivery</p>
                    <span>Free</span>
                </div>

                <hr />

                <div className="summary total">
                    <p>Total</p>
                    <span>₹{total}</span>
                </div>

                <button className="pay-btn" onClick={handlePayment}>
                    Proceed to Payment
                </button>
            </div>

        </div>
    );
};

export default Checkout;