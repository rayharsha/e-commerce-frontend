
import products from "../data/products";
import ProductCard from "./ProductCard";
import { useState } from "react";
import "../style/ProductGrid.css"
const ProductGrid = () => {
  const [search, setSearch] = useState("");

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        onChange={(e) => setSearch(e.target.value)}
      /> */}

      <div className="grid">
        {filtered.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;