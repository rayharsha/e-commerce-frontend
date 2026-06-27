import { useState } from "react";

export default function TreeNode({ node, parent,setParent }) {
    const isSelected = parent===node.id
    const [expand, setExpand] = useState(false);
    return (
        <>
          
 <li style={{listStyle:"none"}}>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 6px",
                cursor: "pointer"
            }}>   
                {node.children?.length > 0 ? (
                    <span
                        onClick={(e) => {
                            e.stopPropagation(); 
                            setExpand(!expand);
                        }}
                        style={{
                            width: "16px",
                            display: "inline-block",
                            textAlign: "center",
                            fontWeight: "bold",
                            cursor: "pointer"
                        }}
                    >
                        {expand ? "-" : "+"}
                    </span>
                ) : (
                       <span>
                    {node.children?.length > 0 ? "🗂️" : "📄"}
                </span>
                )}
                <span
                    onClick={() =>setParent(node.id)}
                    style={{
                        background: isSelected ? "#ffe5b4" : "transparent",
                        padding: "2px 6px",
                        borderRadius: "4px"
                    }}
                >
                    {node.name}
                </span>
            </div>

            {expand && node.children?.length > 0 && (
                <ul style={{ marginLeft: "20px" }}>
                    {node.children.map((child) => (
                        <TreeNode
                            key={child.id}
                            node={child}
                            parent={parent}
                                setParent={setParent} 
                           
                        />
                    ))}
                </ul>
            )}
        </li>

    
        </>
    );
}
