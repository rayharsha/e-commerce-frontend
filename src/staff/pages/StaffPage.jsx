import useStaff from "../hooks/useStaff";
import StaffTable from "../components/StaffTable";
import { useState } from "react";
import StaffHeader from "../components/StaffHeader";
import "../style/StaffHeader.css"
import AddStaffForm from "../components/AddStaffModal";
import EditStaffDrawer from "../components/EditStaffDrawer";


const StaffPage = () => {
    console.log("staff page loaded");
    const [status, setStatus] = useState("");
    const [role, setRole] = useState("");

    const { staff, loading, fetchStaff, createStaff, deleteStaffById, editStaffById } = useStaff(status, role);
    const [search, setSearch] = useState("")
    const [showForm, setShowForm] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [selectedStaff, setSelectedStaff] = useState(null)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleEdit = async (staff) => {
        setSelectedStaff(staff)
        setIsDrawerOpen(true)
    }
    const handleDelete = async (id) => {
        await deleteStaffById(id);
    }
    const handleUpdate = async (id, data) => {
        await editStaffById(id, data);
        setIsDrawerOpen(false);
    }
    return (
        <div>
            <StaffHeader search={search} setSearch={setSearch} status={status} setStatus={setStatus} role={role} setRole={setRole} onAddClick={() => setShowForm(true)} />
            {showForm && (
                <AddStaffForm isOpen={showForm} createStaff={createStaff} fetchStaff={fetchStaff} closeForm={() => setShowForm(false)} />
            )}
            <StaffTable staff={staff} loading={loading}
                onDelete={handleDelete} onEdit={handleEdit}
                status={status} role={role} fetchStaff={fetchStaff} />
            <EditStaffDrawer isOpen={isDrawerOpen} staff={selectedStaff}
                onClose={() => setIsDrawerOpen(false)} onUpdate={handleUpdate} />
        </div>
    );
};

export default StaffPage;