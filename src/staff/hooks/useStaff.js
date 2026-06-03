import { useEffect, useState } from "react";
import { addStaff, deleteStaff, getAllStaff, updateStaff } from "../service/staffService";
import { useSearchParams } from "react-router-dom";
import { validateStaff } from "../lib/staffValidator";

const useStaff = (status, role) => {
    console.log("Sending Filters:", { status, role })
    const [staff, setStaff] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchStaff = async () => {
        const params = new URLSearchParams();
        if (status) params.append("status", status);
        if (role) params.append("role", role);
        setLoading(true);
        try {
            const res = await getAllStaff({ status, role });
            //  console.log("API DATA:",data);
            setStaff(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const createStaff = async (form, closeForm, resetForm) => {
        const errors = validateStaff(form);
        if (Object.keys(errors).length > 0) {
            return errors;
        }
        try {
            await addStaff(form);
            await fetchStaff();
            closeForm()
            resetForm();
            return {};
        } catch (error) {
            console.error(error)
        }
    }

    const deleteStaffById = async (id) => {
        await deleteStaff(id);
        fetchStaff();
    }
    const editStaffById = async (id, data) => {
        const errors = validateStaff(data);
        if (Object.keys(errors).length > 0) {
            return errors;
        }
        try {
            await updateStaff(id, data);
            await fetchStaff();
            return {}
        } catch (err) {
            console.error(err);
            return { api: "updatee failed" }
        }
    }
    useEffect(() => {
        console.log("State STAFF:", staff);
        fetchStaff();
    }, [status, role]);


    return { staff, loading, fetchStaff, createStaff, deleteStaffById, editStaffById };
};

export default useStaff;