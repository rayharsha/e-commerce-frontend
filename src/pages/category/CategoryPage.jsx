import useCategory from "../../lib/hooks/usecategory"
import { useDrawer } from "../../lib/hooks/useDrawer";
import Category from "../Category";
import CategoryDrawer from "./component/CategoryDrawer";
import CatgeoryHeader from "./component/CategoryHeader";
import CatgeoryTable from "./component/CategoryTable";
import "./category.css";
import { useEffect, useState } from "react";
const CategoryPage = () => {
    const { loading, categories, deleteCategory, getAllCategories, createCategory, updateCategory, toggleCatgeory } = useCategory();
    const { isOpen, closeDrawer, openDrawer } = useDrawer();
    const [mode, setMode] = useState("add");
    const [selectedCategory, setSelectedCategory] = useState(null)
    const handleEdit = (cat) => {
        console.log("edited ")
        setMode("edit");
        setSelectedCategory(cat);
        openDrawer();
    }
    // const flattenCatgeory=(cats)=>{
    //     let result=[];
    //     cats.forEach((cat)=>{
    //         result.push(cat);
    //         if(cat.children&& cat.children.length>0){
    //             result=result.concat(flattenCatgeory(cat.children));
    //         }
    //     })
    //     return result;
    // }
    useEffect(() => {
        getAllCategories();
    }, [])
    return (
        <div>
            <CatgeoryHeader onAddClick={openDrawer} />
            <CatgeoryTable categories={categories} getCategories={getAllCategories} onToggle={toggleCatgeory} deleteCategory={deleteCategory} onEdit={handleEdit}
            />
            <CategoryDrawer isOpen={isOpen} onClose={closeDrawer} onSuccess={getAllCategories} createCategory={createCategory} updateCategory={updateCategory} mode={mode} selectedCategory={selectedCategory} />

        </div>
    )
}

export default CategoryPage;