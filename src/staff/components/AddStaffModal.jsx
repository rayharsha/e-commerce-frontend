import { useState } from "react";
import { addStaff } from "../service/staffService";
import { validateStaff } from "../lib/staffValidator";
import "../style/addStaff.css"
const AddStaffForm = ({ createStaff, closeForm, isOpen }) => {
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        name: "",
        email: "",
        contact: "",
        joiningDate: "",
        role: "",
        status: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createStaff(form, closeForm, () => setForm({
            name: "",
            email: "",
            contact: "",
            joiningDate: "",
            role: "",
            status: ""
        }))
        if (Object.keys(result).length > 0) {
            setErrors(result);
        } else {
            setErrors({})
        }
    };

    return (
        <>
            <div className={`overlay ${isOpen ? "show" : ""}`} onClick={closeForm}></div>
            <div className={`drawer ${isOpen ? "open" : ""}`}>
                <h2>Add Staff</h2>
                <p className="sub">Add your staff neccessary information</p>
                <form onSubmit={handleSubmit} className="add-form" noValidate>

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
                        <button type="button" className="cancel" onClick={closeForm}>Cancel</button>
                        <button type="submit" className="submit">Add Staff</button>
                    </div>
                </form>
            </div >
        </>

    );
};

export default AddStaffForm;