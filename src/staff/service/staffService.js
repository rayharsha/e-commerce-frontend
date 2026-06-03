import axios from "axios";

const API = "http://localhost:5000/api/staff";

export const getAllStaff = async ({ status, role }) => {
    const res = await axios.get(API, {
        params: { status, role }
    });
    return res.data;
};

export const addStaff = async (data) => {
    const res = await axios.post(API, data);
    return res.data;
};

export const deleteStaff = async (id) => {
    const res = await axios.delete(`${API}/${id}`);
    return res.data;
};

export const updateStaff = async (id, updateData) => {
    try {
        const res = await axios.put(`${API}/${id}`, updateData);
        return res.data;
    } catch (err) {
        console.log("Error updateing staff:", err);
        throw err;
    }
};
