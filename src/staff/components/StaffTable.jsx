import { useState } from "react";
import "../style/staffTable.css"
import { deleteStaff, updateStaff } from "../service/staffService";


const StaffTable = ({ staff, loading, fetchStaff, status, role, onEdit, onDelete }) => {


  const [openMenuId, setOpenMenuId] = useState(null);

  // const [form, setForm] = useState({
  //name: "",
  //   email: "",
  //   contact: "",
  //   joiningDate: "",
  //   role: "",
  //   status: ""
  // })

  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value
  //   })
  // };


  if (!loading && Array.isArray(staff) && staff.length === 0) {
    return (
      <p>
        {status || role ? "No information found for selected filter" :
          ""}
      </p>
    )
  }

  return (
    <>
      <table>
        {/* <thead> */}
        {/* <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Joining Date</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead> */}
        <tbody>
          {staff.map((s) => (
            <tr key={s._id || s.id}>
              <td className="name-cell">
                {s.name}
              </td>

              <td>{s.email}</td>
              <td>{s.contact && s.contact.length === 10 ? `+91${s.contact.slice(0, 5)} ${s.contact.slice(5)}` : "-"}</td>
              <td>{s.joiningDate ? new Date(s.joiningDate).toLocaleDateString() : "-"}</td>
              <td>{s.role}</td>

              <td>
                <span
                  className={
                    s.status === "Active"
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {s.status}
                </span>
              </td>

              <td className="action-cell">

                <button className="action-btn "
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenMenuId(openMenuId === s._id ? null : s._id)
                  }}>⋮</button>
                {openMenuId === s._id && (
                  <div className="dropdown">
                    <button onClick={() => { onEdit(s); setOpenMenuId(null) }} className="submit">Edit</button>
                    <button onClick={() => onDelete(s._id)} className="cancel">Delete</button>

                  </div>
                )}

              </td>

            </tr>
          ))}
        </tbody>
      </table >

    </>
  );
};

export default StaffTable;