import express from "express"

import verifyEmail from "../pages/verifyEmail.jsx";
import forgotPassword from "../pages/forgotPassword.jsx";

const authRouter = express.Router();

// authRouter.post("/login", login)
authRouter.post("/forgot-password", forgotPassword);
// authRouter.post("/reset-password/:token", resetPassword);
authRouter.post("/verify-email", verifyEmail);

export default authRouter;