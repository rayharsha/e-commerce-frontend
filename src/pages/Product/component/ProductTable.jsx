import { useState } from "react";

const ProductTable = ({
    products = [],
    onToggle,
    onEdit,
    deleteProduct,
}) => {
    const [openMenu, setOpenMenu] = useState(null);

    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full border-collapse">
                <thead className="border-b bg-gray-50 text-gray-600 text-sm">
                    <tr>
                        <th className="p-4 text-left">PRODUCT NAME</th>
                        <th className="p-4 text-left">CATEGORY</th>
                        <th className="p-4 text-left">PRICE</th>
                        <th className="p-4 text-left">SALE PRICE</th>
                        <th className="p-4 text-left">STOCK</th>
                        <th className="p-4 text-left">STATUS</th>
                        <th className="p-4 text-center">ACTIONS</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <tr
                            key={product.id}
                            className="border-b hover:bg-gray-50 transition"
                        >
                            <td className="p-4 font-medium">
                                {product.name}
                            </td>

                            <td className="p-4">
                                {product.category?.name || "-"}
                            </td>

                            <td className="p-4">
                                ₹{product.productPrice}
                            </td>

                            <td className="p-4">
                                ₹{product.salePrice}
                            </td>

                            <td className="p-4">
                                {product.quantity}
                            </td>

                            <td className="p-4">
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                                    Selling
                                </span>
                            </td>

                            <td className="p-4 text-center relative">
                                <button
                                    onClick={() =>
                                        setOpenMenu(openMenu === product._id ? null : product._id)
                                    }
                                    style={{
                                        all: "unset",
                                        cursor: "pointer",
                                        width: "36px",
                                        height: "36px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "9999px",
                                    }}
                                    onMouseOver={(e) => (e.target.style.background = "#d4d5d6")}
                                    onMouseOut={(e) => (e.target.style.background = "transparent")}>
                                    ⋯
                                </button>

                                {openMenu === product._id && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            right: "10px",
                                            width: "140px",
                                            background: "#fff",
                                            borderRadius: "10px",
                                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                                            overflow: "hidden",
                                            zIndex: 50,
                                        }} >

                                        <button
                                            onClick={() => {
                                                onEdit(product);
                                                setOpenMenu(null);
                                            }}
                                            style={{
                                                all: "unset",
                                                display: "block",
                                                width: "100%",
                                                padding: "10px 12px",
                                                cursor: "pointer",
                                                fontSize: "14px",
                                                color: "#374151",
                                            }}
                                            onMouseOver={(e) => (e.target.style.background = "#f3f4f6")}
                                            onMouseOut={(e) => (e.target.style.background = "transparent")}

                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => {
                                                deleteProduct(product._id);
                                                setOpenMenu(null);
                                            }}
                                            style={{
                                                all: "unset",
                                                display: "block",
                                                width: "100%",
                                                padding: "10px 12px",
                                                cursor: "pointer",
                                                fontSize: "14px",
                                                color: "#ef4444",
                                            }}
                                            onMouseOver={(e) => (e.target.style.background = "#fee2e2")}
                                            onMouseOut={(e) => (e.target.style.background = "transparent")}
                                        >
                                            Delete
                                        </button>

                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;