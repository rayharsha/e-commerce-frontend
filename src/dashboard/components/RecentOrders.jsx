import "./RecentOrders.css";
import { toast } from "react-toastify";
import { useState } from "react";

const initialOrders = [
  {
    id: 39,
    customer: "riyaaa",
    amount: "$190.88",
    status: "Delivered",
  },
  {
    id: 32,
    customer: "abc",
    amount: "$90.78",
    status: "Processing",
  },
  {
    id: 29,
    customer: "riya",
    amount: "$419.75",
    status: "Pending",
  },
];

const statuses = [
  "Pending",
  "Processing",
  "Delivered",
  "Cancel",
  "Out for delivery",
];

const RecentOrders = () => {
  const [orders, setOrders] = useState(initialOrders);

  const handleStatusChange = (index, newStatus) => {
    const updated = [...orders];
    updated[index].status = newStatus;
    setOrders(updated);

    toast.success(`Order ${updated[index].id} → ${newStatus}`);
  };

  const handlePrint = (id) => {
    toast.info(`Printing receipt for order ${id}`);
    window.print(); 
  };

  const handleInvoice = (id) => {
    toast.info(`Opening invoice for order ${id}`);
   
  };

  return (
    <div className="orders-card">
      <h3>Recent Orders</h3>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
              <th>Invoice</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.amount}</td>

              
                <td>
                  <span className={`status ${order.status.toLowerCase().replace(/\s/g,"-")}`}>
                    {order.status}
                  </span>
                </td>

         
                <td>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(index, e.target.value)
                    }
                  >
                    {statuses.map((s, i) => (
                      <option key={i} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>

              
                <td className="actions">
                  <button onClick={() => handlePrint(order.id)}>🖨️</button>
                  <button onClick={() => handleInvoice(order.id)}>📄</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;