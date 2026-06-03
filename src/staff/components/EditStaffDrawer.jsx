import { useEffect, useState } from "react";
import "../style/EditStaff.css"

const EditStaffDrawer = ({ isOpen, staff, onClose, onUpdate }) => {

    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        name: "",
        email: "",
        contact: "",
        joiningDate: "",
        role: "",
        status: ""
    })
    useEffect(() => {
        if (staff) {
            setForm({
                name: staff.name,
                email: staff.email,
                contact: staff.contact,
                joiningDate: staff.joiningDate?.split("T")[0] || "",
                role: staff.role,
                status: staff.status
            })
        }
    }, [staff])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await onUpdate(staff._id, form);
        const id = staff?._id || staff?.id;
        // console.log("updatigf:",id)
        if (!id) return;
        const result = await onUpdate(id, form);
        if (Object.keys(result || {}).length > 0) {
            setErrors(result)
            return;
        }
        setErrors({});
        onClose();

    }
    if (!isOpen) return null;

    return (
        <>
            <div className="drawer-overlay" onClick={onClose}>
                <div className={`drawer ${isOpen ? "open" : ""}`}
                    onClick={(e) => e.stopPropagation()}>
                    <h2>Update Staff</h2>
                    <p>Update your staff neccessary information from here</p>
                    <form onSubmit={handleSubmit} className="add-form">
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" />
                        {errors.name && <p>{errors.name}</p>}
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
                        {errors.email && <p>{errors.email}</p>}
                        <input type="text" name="contact" value={form.contact} onChange={handleChange} placeholder="Contact" />
                        {errors.contact && <p>{errors.contact}</p>}
                        <input type="date" name="joiningDate" value={form.joiningDate} onChange={handleChange} placeholder="JoiningDate" />
                        {errors.joiningDate && <p>{errors.joiningDate}</p>}
                        <input type="text" name="role" value={form.role} onChange={handleChange} placeholder="Role" />
                        {errors.role && <p>{errors.role}</p>}
                        <input type="text" name="status" value={form.status} onChange={handleChange} placeholder="Status" />
                        {errors.status && <p>{errors.status}</p>}
                        <div className="btn-group">
                            <button type="button" className="cancel" onClick={onClose}>Cancel</button>
                            <button type="submit" className="submit">Update Staff</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default EditStaffDrawer;

// const handleDelete = async (id) => {
//     try {
//         await deleteStaff(id);
//         fetchStaff();
//         setOpenMenuId(null);
//     } catch (err) {
//         console.log(err)
//     }
// };

// const handleEdit = async (s) => {
//     setForm({
//         name: s.name,
//         email: s.email,
//         contact: s.contact,
//         joiningDate: s.joiningDate?.split("T")[0],
//         role: s.role,
//         status: s.status
//     });
//     setEditId(s._id);
//     setOpenMenuId(null)
//     setIsDrawerOpen(true);
// }
// const handleUpdate = async (e) => {
//     e.preventDefault();
//     await updateStaff(editId, form);
//     setIsDrawerOpen(false)
//     setEditId(null);
//     setForm({
//         name: "",
//         email: "",
//         contact: "",
//         joiningDate: "",
//         role: "",
//         status: ""
//     })
//     fetchStaff();

// }


