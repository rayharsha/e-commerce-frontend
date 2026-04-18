import { useLocation, useNavigate } from "react-router-dom";
import "../style/Success.css";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { items, total, address } = location.state || {};

  if (!items) {
    return <h2>No order found</h2>;
  }

  return (
    <div className="success">

      <h1>🎉 Order Placed Successfully</h1>
      <p>Your order will be delivered soon.</p>

      {/* Address */}
      <div className="success-box">
        <h3>Delivery Address</h3>
        <p>{address.name}</p>
        <p>{address.address}</p>
        <p>{address.city} - {address.pincode}</p>
        <p>{address.phone}</p>
      </div>

      {/* Items */}
      <div className="success-box">
        <h3>Order Items</h3>

        {items.map((item) => (
          <div key={item.id} className="success-item">
            <img src={item.image} />
            <div>
              <p>{item.name}</p>
              <span>₹{item.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="success-box total">
        <h2>Total Paid: ₹{total}</h2>
      </div>

      <button onClick={() => navigate("/")}>
        Continue Shopping
      </button>

    </div>
  );
};

export default Success;