import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navigate=useNavigate()
  return (
    <nav className="navbar">
      <div className="logo">SwiftCart</div>

      <input
        type="text"
        placeholder="Search products..."
        className="search"
      />

      <div className="nav-links">
        {/* <span classn>Login</span> */}
        <span onClick={()=>navigate("/cart")}>Cart 🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;