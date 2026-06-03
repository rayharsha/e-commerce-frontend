import { Link, useNavigate } from "react-router-dom";
import "./LoginBox.css";
import { useState } from "react";

const LoginBox = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState("admin");

    return (
        <div className="login-page">

            <div className="login-wrapper">
                <div className="login-image">
                    <img src="/login-office-JBFguH2f.jpeg" alt="dashboard" />
                </div>
                <div className="login-card">
                    <div className="toggle">
                        <button
                            className={role === "admin" ? "active" : ""}
                            onClick={() => setRole("admin")}
                        >
                            Admin
                        </button>

                        <button
                            className={role === "delivery" ? "active" : ""}
                            onClick={() => setRole("delivery")}
                        >
                            Delivery Boy
                        </button>
                    </div>

                    <h2>{role === "admin" ? "Admin Login" : "Delivery Boy Login"}</h2>

                    <form>
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" />

                        <label>Password</label>
                        <input type="password" placeholder="Your Password" />

                        <button className="login-btn" onClick={() => navigate("/home")} >Login</button>

                    </form>

                    {/* Links */}
                    <div className="extra-links">
                        <Link to="/forgot-password">Forgot password</Link>
                        <p>{role === "admin" ? "Create account" : ""}</p>
                    </div>

                </div>
            </div>

            {/* Card */}

        </div >
    );
};

export default LoginBox;