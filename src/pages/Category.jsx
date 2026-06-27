import { useState } from "react";
import { useEffect } from "react";
import useCategory from "../lib/hooks/usecategory.js";

const Category = () => {
    const { categories, loading,getAllCategories, createCategory, updateCategory, deleteCategory } = useCategory();

    useEffect(() => {
        getAllCategories();
    },[]);
if(loading)return <p>loading,..</p>
    return (
        <>
        <div>
            getAllCategories();
                {categories.map(category => (
                    <div key={categories.id}>{categories.name}</div>
                    ))}
            <h2>hi</h2>
        </div>
        <div>
             <form  className="todo-form" style={{background:"pink"}}>

                <input
                    placeholder="Enter todo..."
                    // value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button type="submit">
                    Add
                </button>

            </form>

        </div>
        </>
    );  
}
export default Category;