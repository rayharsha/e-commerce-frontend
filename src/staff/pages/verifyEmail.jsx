import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const VerifyEmail = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    console.log("FULL URL:", window.location.href)
    console.log("Token", token)
    useEffect(() => {
        if (token) {
            verifyEmail();
        }
    }, [token]);

    const verifyEmail = async () => {
        try {
            const res = await axios.post(
                `http://localhost:5000/api/auth/verify-email?token=${token}`
            );

            console.log("SUCCESS:", res.data);
            alert("Email verified successfully");
            navigate("/")
        } catch (error) {
            console.log("ERROR:", error.response?.data);
            alert(error.response?.data?.message || "Verification failed");
        }
    };

    return <h1>Verifying Email...</h1>;
};

export default VerifyEmail;