import { useDrawer } from "../../lib/hooks/useDrawer";
import useProduct from "../../lib/hooks/useProduct";
import { useEffect, useState } from "react";
import ProductDrawer from "./component/ProductDrawer";
import ProductHeader from "./component/ProductHeader";
import ProductTable from "./component/ProductTable";
const ProductPage = () => {
    const [mode, setMode] = useState("add");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { getAllProducts, deleteProduct, updateProduct, toggleProduct, products } = useProduct();
    console.log("Product:", products)
    const { isOpen, openDrawer, closeDrawer } = useDrawer();

    useEffect(() => {
        getAllProducts()
    }, [])
    useEffect(() => {
        if (products.length > 0) {
            console.log("Produt Lsit Item:", products[0])
        }
    }, [products])
    const handleEdit = (product) => {
        setMode("edit");
        setSelectedProduct(product);
        openDrawer();
    };

    const handleAdd = () => {
        setMode("add");
        setSelectedProduct(null);
        openDrawer();
    };

    return (
        <div>
            <ProductHeader onAddClick={openDrawer} />
            <ProductDrawer isOpen={isOpen} onClose={() => {
                closeDrawer();
            }} onSuccess={getAllProducts}
                mode={mode} selectedProduct={selectedProduct} />
            <ProductTable products={products} onToggle={toggleProduct} deleteProduct={deleteProduct} onEdit={handleEdit} />
        </div>
    )
}

export default ProductPage;