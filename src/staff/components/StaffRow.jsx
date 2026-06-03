// import "../style/staffRow.css"
const StaffRow = ({ staff, index }) => {
  return (
    <tr>
      <td className="name-cell">
        <span>{staff.name}</span>
      </td>

      <td>{staff.email}</td>
      <td>{staff.contact}</td>
      <td>{staff.date || staff.joiningDate}</td>
      <td>{staff.role}</td>

      <td>
        <span
          className={`status ${
            staff.status === "Active" ? "active" : "inactive"
          }`}
        >
          {staff.status || "Active"}
        </span>
      </td>

      <td>
        <button className="action-btn">⋮</button>
      </td>
    </tr>
  );
};

export default StaffRow;