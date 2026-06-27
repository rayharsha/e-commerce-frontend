import { useEffect, useState } from "react";
import useCategory from "../../../lib/hooks/usecategory";
import TreeNode from "./TreeNode";

const CategoryDrawer = ({ isOpen, onClose, openDrawer, onSuccess, selectedCategory, mode }) => {
    const { loading, categories, getAllCategories, createCategory, updateCategory, toggleCatgeory } = useCategory();

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [parent, setParent] = useState("")
    const [published, setPublished] = useState(false);
    const [selectedNodes, setSelectedNodes] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [openSelect, setOpenSelect] = useState(false);
    const selectNode = (id) => {
        setSelectedNodes(prev =>
            prev.includes(id)
                ? prev.filter(x => x !== id)
                : [...prev, id]
        );
    };
    useEffect(()=>{
         getAllCategories("tree");
    },[])
    useEffect(() => {
        if (!isOpen) return;
       
        if (mode === "edit" && selectedCategory) {
            setName(selectedCategory.name || "");
            setDescription(selectedCategory.description || "");
            setParent(selectedCategory.parent || "");
            setPublished(selectedCategory.published || false);
        } else {
            setName("");
            setDescription("")
            setParent("")
            setPublished(false)
        }
    }, [isOpen,mode,selectedCategory]);
    const handleAddCategory = async () => {
        // setMode("add");
        // setSeletedCategory(null);
        // openDrawer();
        console.log("CLick working")
        try {
            const data = { name, description, parent: parent || null, published };
            console.log("step 2", data)
            if (mode === "edit") {
                await updateCategory(
                    selectedCategory.id,
                    data
                )
                onSuccess();
                onClose();
            } else {
                await createCategory(data);
                console.log("step3 don", data)
            }
            onSuccess()
            onClose();
            console.log(data)
        } catch (error) {
            console.error(error)
        }

    }
    const visibleCategories = showAll ? categories : categories.slice(0, 10);
    if (!isOpen) return null;


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
                            {mode === "edit" ? "Edit Category" : "Add Category"}

                        </h2>
                        <p className="drawer-sub">{mode === "edit" ? "Update your Product category and necessary information from here" : "Add your Product category and necessary information from here"}</p>
                    </div>
                    <span className="drawer-close" onClick={onClose}>X</span>
                </div>
                <div className="drawer-body">
                    <div className="form-group">
                        <label>Name</label>
                        <input placeholder=" Category Name" className="input" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea placeholder="Description" className="input" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label> Parent Category</label>
                        <div className="custom-select">
                            <div className="select-wrapper" onClick={() => setOpenSelect(!openSelect)}>
                                {parent ? findCategoryName(categories, parent) : "Seleect parent category"}
                            </div>
                            {openSelect && (
                                <div className="dropdown" style={{height:"auto"}}>
                                    <ul>
                                        {visibleCategories.map((node) => (
                                            <TreeNode
                                                key={node.id}
                                                node={node}
                                                selectedNodes={selectedNodes}
                                                parent={parent}
                                                selectNode={selectNode}
                                                setParent={(id)=>{setParent(id);setOpenSelect(false)}}
                                                 />
                                        ))}
                                    </ul>
                                    {categories.length > 10 && (
                                        <button onClick={() => setShowAll(!showAll)}>
                                            {showAll ? "show less" : "show More"}
                                        </button>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                    <div className="toggle-row">
                        <span>Published</span>
                        <label style={{ display: "inline-block", cursor: "pointer", justifyContent: "space-between" }}>
                            <input
                                type="checkbox"
                                checked={published}
                                onChange={() => setPublished(!published)}
                                style={{ display: "none" }}
                            />

                            <div
                                style={{
                                    width: "48px",
                                    height: "28px",
                                    borderRadius: "8px",
                                    background: published ? "green" : "#ccc",
                                    position: "relative",
                                    transition: "0.3s"
                                }}
                            >
                                <div
                                    style={{
                                        width: "20px",
                                        height: "26px",
                                        borderRadius: "6px",
                                        background: "white",
                                        position: "absolute",
                                        left: published ? "26px" : "2px",
                                        top: "1px",
                                        transition: "0.3s"
                                    }}
                                />
                            </div>
                        </label>

                    </div>
                </div>

                <div className="drawer-footer" style={{marginTop:"322px"}}>
                    <button className="btn btn-primary" onClick={handleAddCategory}>
                        {mode === "edit" ? "update Category" : "Add Category"}
                    </button>
                    <button onClick={onClose} className="btn btn-close">Close</button>
                </div>
            </div>
        </div>
    )
}
export default CategoryDrawer;