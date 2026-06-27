const CatgeoryHeader=({onAddClick})=>{
return (
    <div className="category-header">
        <div className="category-header-left">
            <h1>Category</h1>
            <p>
                Manage product categories
            </p>
        </div>
        <div className="header-actions">
            <button className="btn btn-outline">Export</button>
            <button className="btn btn-outline">Import</button>
            <button className="btn btn-outline"> Bulk action</button>
            <button className="btn btn-danger">Delete</button>
            <button onClick={onAddClick} className="btn btn-primary">Add category</button>
        </div>
    </div>
)
}
export default CatgeoryHeader;