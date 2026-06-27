import { useState } from "react";
import CategoryService from "../api/categoryService";
import toast from "react-hot-toast";

const useCategory = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const categoryService = new CategoryService();
    const getAllCategories = async (requestType, categoryId) => {

        setLoading(true)
        setError(null)
        try {
            const params = {
                params: {
                    request: requestType,
                    categoryId
                }
            }
            const response = await categoryService.getAllCategories(params);
            console.log("Category response:", response, params);
            setCategories(response.data);
        } catch (error) {
            console.log("FULL ERROR:", error)
            if (error.response) {
                console.log("BCKEND ERROR:", error.response.data)
            }
            setError(error);
            toast.error(error?.response?.data?.message?.[0] || error.message || "something went wrong")
        }
    };
    const createCategory = async (data) => {
        console.log("HOOKCALLED")
        setLoading(true)
        try {
            const response = await categoryService.createCategory(data);
            console.log("API HIT:", response)
            toast.success("Category created")
            getAllCategories();
        } catch (error) {
            setError(error)
            toast.error(error.message)
        }
    };
    const updateCategory = async (id, data) => {
        setLoading(true)
        try {
            const response = await categoryService.updateCategory(id, data);
            setCategories(prev => prev.map(cat =>
                cat.id === id ? { ...cat, ...data } : cat
            ))
            toast.success("Category updated")
            getAllCategories();
        } catch (error) {
            setError(error)
            toast.error(error.message)
        }
    };
    const deleteCategory = async (data) => {
        setLoading(true)
        try {
            const response = await categoryService.deleteCategory(data);
            toast.success("Category deleted")
            getAllCategories();
        } catch (error) {
            setError(error)
            toast.error(error.message)
        }
    };
    const toggleCatgeory = async (id) => {
        setLoading(true)
        try {
            const response = await categoryService.toggleCatgegory(id);
            const updated = response.data;
            setCategories(prev => prev.map(cat => cat.id === id ? {
                ...cat,
                published: updated.published
            } : cat
            ));

        } catch (error) {
            console.error(error)
        }
    }
    return {
        categories,
        loading,
        getAllCategories,
        createCategory,
        updateCategory,
        deleteCategory,
        toggleCatgeory
    };
};
export default useCategory;