import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import Button from "../../../components/ui/Button";

const CategoryTable = ({ categories = [], onToggle, deleteCategory, onEdit, getCategories }) => {
    const [openMenu, setOpenMenu] = useState(null)
    const navigate = useNavigate();
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Sub category</th>
                    <th>Published</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {categories?.map((cat) => (

                    <tr key={cat.id}>
                        <td>{cat.id?.toString().slice(-4)}</td>
                        <td>
                            {/* <button onClick={() => navigate(`/dashboard/category/${category.id}`)}> */}
                            {cat.name}
                            {/* </button> */}
                        </td>
                        <td>{cat.description}</td>
                        <td>{cat.hasChild && (<Button onClick={() => getCategories("", cat.id)}>Show</Button>)}</td>
                        <td>
                            <label style={{ display: "inline-block", cursor: "pointer" }}>
                                <input type="checkbox"
                                    checked={Boolean(cat.published)}
                                    onChange={() => {
                                        console.log("toglle clicked:", cat.id)
                                        onToggle(cat.id)
                                    }
                                    } style={{ display: "none" }} />
                                <div
                                    style={{ width: "48px", height: "30px", borderRadius: "8px", background: cat.published ? "green" : "#ccc", position: "relative", cursor: "pointer", transition: "0.3s" }}>
                                    <div
                                        style={{
                                            width: "20px", height: "29px", borderRadius: "6px", background: "white", position: "absolute",
                                            left: cat.published ? "27px" : "0px", transition: "0.3s"
                                        }}></div>
                                </div>
                            </label>
                        </td>

                        <td style={{ position: "relative" }}>
                            <button onClick={() => setOpenMenu(openMenu === cat.id ? null : cat.id)} style={{ background: "#ddd", color: "black", border: "none", fontSize: "8px", cursor: "pointer", top: "12px" }}>:</button>
                            {openMenu === cat.id && (
                                <div style={{ position: "absolute", right: "44px", top: "48px", background: "#fff", border: "1px solid #ddd", borderRadius: "6px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", width: "100px", zIndex: 10 }}>
                                    <div onClick={() => {
                                        console.log("Edit:", cat.id);
                                        setOpenMenu(null)
                                        onEdit(cat)
                                    }} style={{
                                        padding: "8px", cursor: "pointer"
                                    }}>Edit</div>
                                    <div onClick={() => {
                                        deleteCategory(cat.id);
                                        setOpenMenu(null)
                                    }}
                                        style={{ padding: "8px", cursor: "pointer", color: "red" }}>
                                        Delete
                                    </div>
                                </div>
                            )}
                            {/* <button className="btn btn-cancel" onClick={() => deleteCategory(cat.id)}>:</button> */}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default CategoryTable;
