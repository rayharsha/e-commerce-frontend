const ProductHeader=({onAddClick})=>{
return (
    <div className="category-header">
        <div className="category-header-left">
            <h1>Product</h1>
            <p>
                Manage Your product 
            </p>
        </div>
        <div className="header-actions">
            <button className="btn btn-outline">Export</button>
            <button className="btn btn-outline">Import</button>
            <button className="btn btn-outline"> Bulk action</button>
            <button className="btn btn-danger">Delete</button>
            <button onClick={onAddClick} className="btn btn-primary">Add Product</button>
        </div>
    </div>
)
}
export default ProductHeader;