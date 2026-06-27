import { useEffect, useState } from "react";
import useCategory from "../../../lib/hooks/usecategory";
import useProduct from "../../../lib/hooks/useProduct";
import TreeNode from "../../category/component/TreeNode";

const ProductDrawer = ({ onClose, mode, selectedProduct, isOpen, onSuccess, }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [productSku, setProductSku] = useState("");
    const [barcode, setBarcode] = useState("");
    const [category, setCategory] = useState("");
    const [openCategory, setOpenCategory] = useState(false);
    const [openDefaultCategory, setOpenDefaultCategory] = useState(false);
    const [defaultCategory, setDefaultCategory] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [salePrice, setSalePrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [slug, setSlug] = useState("")
    const [tags, setTags] = useState("");
    const [images, setImages] = useState([]);

    const { categories, getAllCategories } = useCategory();
    const { getAllProducts, createProduct, updateProduct, deleteProduct } = useProduct();
    useEffect(() => {
        getAllCategories("tree")
    }, [])
    useEffect(() => {
        if (!isOpen) return;

        if (mode === "edit" && selectedProduct) {
            setName(selectedProduct.name || "");
            setDescription(selectedProduct.description || "");
            setProductSku(selectedProduct.productSku || "");
            setBarcode(selectedProduct.barcode || "");
            setCategory(selectedProduct.category || "");
            setDefaultCategory(selectedProduct.defaultCategory || "");
            setProductPrice(selectedProduct.productPrice || "");
            setSalePrice(selectedProduct.salePrice || "");
            setQuantity(selectedProduct.quantity || "");
            setSlug(selectedProduct.slug || "");
            setTags(selectedProduct.tags || "");
            setImages(selectedProduct.images || []);
        } else {
            setName("");
            setDescription("");
            setProductSku("");
            setBarcode("");
            setCategory("");
            setDefaultCategory("");
            setProductPrice("");
            setSalePrice("");
            setQuantity("");
            setSlug("");
            setTags("");
            setImages([]);
        }
    }, [isOpen, mode, selectedProduct]);
    if (!isOpen) return null;

    const handleSaveProduct = async () => {
        try {
            const data = {
                name,
                description,
                productSku,
                barcode,
                category,
                defaultCategory: defaultCategory || null,
                productPrice,
                salePrice,
                quantity,
                slug,
                tags,
                images
            };

            if (mode === "edit") {
                await updateProduct(selectedProduct._id, data);
            } else {
                await createProduct(data);
            }
            onSuccess();
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    const findCategoryName = (nodes, id) => {
        for (let node of nodes) {
            if (node.id === id) return node.name;

            if (node.children?.length) {
                const found = findCategoryName(node.children, id);
                if (found) return found;
            }
        }
        return null;
    };



    return (
        <div className="drawer-overlay">
            <div className="drawer">

                <div className="drawer-header">
                    <div>
                        <h2 className="drawer-title">
                            {mode === "edit" ? "Edit Product" : "Add Product"}
                        </h2>

                        <p className="drawer-sub">
                            {mode === "edit"
                                ? "Update product information"
                                : "Add a new product"}
                        </p>
                    </div>

                    <span className="drawer-close" onClick={() => {
                        onClose()
                    }}>
                        X
                    </span>
                </div>

                <div className="drawer-body">

                    <div className="form-group">
                        <label>Product Name</label>
                        <input
                            className="input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Product Name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            className="input"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                        />
                    </div>

                    <div className="form-group">
                        <label>Category</label>

                        <div className="custom-select">
                            <div
                                className="select-wrapper"
                                onClick={() => setOpenCategory(!openCategory)}
                            >
                                {category ? findCategoryName(categories, category) : "Select Category"}
                            </div>

                            {openCategory && (
                                <div className="dropdown">
                                    <ul>
                                        {categories.map((item) => (
                                            <TreeNode
                                                key={item.id}
                                                node={item}
                                                parent={category}
                                                setParent={(id) => {
                                                    setCategory(id);
                                                    setOpenCategory(false);
                                                }}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>SKU</label>
                        <input
                            className="input"
                            value={productSku}
                            onChange={(e) => setProductSku(e.target.value)}
                            placeholder="SKU"
                        />
                    </div>

                    <div className="form-group">
                        <label>Barcode</label>
                        <input
                            className="input"
                            value={barcode}
                            onChange={(e) => setBarcode(e.target.value)}
                            placeholder="Barcode"
                        />
                    </div>

                    <div className="form-group">
                        <label>Product Price</label>
                        <input
                            type="number"
                            className="input"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            placeholder="0.00"
                        />
                    </div>

                    <div className="form-group">
                        <label>Sale Price</label>
                        <input
                            type="number"
                            className="input"
                            value={salePrice}
                            onChange={(e) => setSalePrice(e.target.value)}
                            placeholder="0.00"
                        />
                    </div>

                    <div className="form-group">
                        <label>Quantity</label>
                        <input
                            type="number"
                            className="input"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="Quantity"
                        />
                    </div>

                    <div className="form-group">
                        <label>Slug</label>
                        <input
                            className="input"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            placeholder="Slug"
                        />
                    </div>
                    <div className="form-group">
                        <label>Tags</label>
                        <input
                            className="input"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="Tags"
                        />
                    </div>

                    {/* <div className="form-group">
                        <label>Images</label>
                        <input
                            type="file"
                            multiple
                            onChange={(e) =>
                                setImages([...e.target.files])
                            }
                        />
                    </div> */}

                </div>

                <div className="drawer-footer">
                    <button
                        className="btn btn-primary"
                        onClick={handleSaveProduct}
                    >
                        {mode === "edit"
                            ? "Update Product"
                            : "Add Product"}
                    </button>

                    <button
                        className="btn btn-close"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ProductDrawer;