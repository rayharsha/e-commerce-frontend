import React, { useState } from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom';
const Sidebar = () => {

    const [open, setOpen] = useState(false);
    return (
        <aside className={`sidebar${open ? "open" : ""}`}>
            <div className='logo'>Swift Cart</div>

            <div className='section'>
                <p className='title'>General</p>
                <ul>
                    <li className='active'>
                        <NavLink to="/dashboard"> Dashboard</NavLink>
                    </li>
                </ul>
            </div>

            <div className='section'>
                <p className='title'>Catalog</p>
                <ul>
                    <li>Products</li>
                    <li>Categories</li>
                    <li>Attributes</li>
                    <li>coupons</li>
                    <li>Campaigns</li>
                    <li>Product sliders</li>
                </ul>
            </div>

            <div className='section'>
                <p className='title'>sales</p>
                <ul>
                    <li>Orders</li>
                    <li>Delivery Boys</li>
                    <li>Customers</li>
                </ul>
            </div>

            <div className='section'>
                <p className='title'> Staff</p>
                <ul>
                    <li>
                        <span>👨‍💼</span>
                        <NavLink to="/dashboard/staff" > Our Staff</NavLink>
                    </li>
                </ul>
            </div>

            <div className='section'>
                <p className='title'>Setting</p>
                <ul><li>Setting</li></ul>
            </div>

            <div className='section'>
                <p className='title'>International</p>
                <ul><li>Localization</li></ul>
            </div>
            <div className='section'>
                <p className='title'>Online store</p>
                <ul><li>Online store</li></ul>
            </div>
        </aside >
    )
}

export default Sidebar