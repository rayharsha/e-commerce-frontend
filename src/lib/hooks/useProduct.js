import { useState } from "react"
import ProductService from "../api/productService";
import toast from "react-hot-toast";

const useProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const productService = new ProductService();

    const getAllProducts = async () => {
        setLoading(true)
        try {
            const response = await productService.getAllProduct();
            console.log("productApi:",response)
            setProducts(response.data)
        } catch (error) {
            if (error.response) {
                console.log("BCKEND ERROR:", error.response.data)
            }
            setError(error);
            toast.error(error?.response?.data?.message?.[0] || error.message || "something went wrong")
        } finally {
            setLoading(false);
        }
    }

    const createProduct = async (data) => {
        setLoading(true)
        try {
            const response = await productService.createProduct(data);
            console.log("API HIT:", response)
            toast.success("Product created")
            await getAllProducts();
            return response;
        } catch (error) {
            setError(error)
            toast.error(error?.response?.data?.message?.[0] || error.message || "something went wrong")
        } finally {
            setLoading(false);
        }
    }
    const updateProduct = async (id, data) => {
        setLoading(true)
        try {
            const response = await productService.updateProduct(id, data);
            toast.success("Product updated")
            await getAllProducts();
            return response;
        } catch (error) {
            setError(error)
            toast.error(error?.response?.data?.message?.[0] || error.message || "something went wrong")
        } finally {
            setLoading(false);
        }
    };
    const deleteProduct = async (data) => {
        setLoading(true)
        try {
            const response = await productService.deleteProduct(data);
            toast.success("Product deleted")
            await getAllProducts();
            return response;
        } catch (error) {
            setError(error)
            toast.error(error?.response?.data?.message?.[0] || error.message || "something went wrong")
        } finally {
            setLoading(false);
        }
    };
    const toggleProduct = async (id) => {
        setLoading(true)
        try {
            const response = await productService.toggleProduct(id);
            const updated = response.data;
            setProducts(prev => prev.map(product => product.id === id ? {
                ...product,
                published: updated.published
            } : product
            ));
            return response;
        } catch (error) {
            setError(error);
            toast.error(error?.response?.data?.message?.[0] || error.message || "something went wrong")
        } finally {
            setLoading(false);
        }
    }
    return {
        products,
        loading,
        getAllProducts,
        createProduct,
        updateProduct,
        deleteProduct,
        toggleProduct
    };
}

export default useProduct;