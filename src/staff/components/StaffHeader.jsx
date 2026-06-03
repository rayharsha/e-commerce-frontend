import { useState } from "react";

const StaffHeader = ({ search, setSearch, status, setStatus, role, setRole, onAddClick }) => {
    return (
        <div className="staff-header">
            <div className="staff-top">
                <div>
                    <h2>All Staff</h2>
                    <p className="sub-text">Manage your team members</p>
                </div>

                <button className="add-btn" onClick={onAddClick}>+ Add Staff</button>
            </div>

            <div className="staff-filters">
                <input
                    type="text"
                    placeholder="Search staff..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {/* <select>
                    <option>All Roles</option>
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>Staff</option>
                </select> */}
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>

                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="">All Roles</option>
                    <option value="manager">Manager</option>
                    <option value="staff">Staff</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
        </div>
    );
};

export default StaffHeader;