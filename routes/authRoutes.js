const express = require("express");
const { sendEmailOtp, verifyEmailOtp, setPassword, login, forgotPassword, verifyResetOtp, resetPassword } = require("../controllers/userController");

const router = express.Router();

// Signup flow
router.post("/register", sendEmailOtp);      // send OTP for signup
router.post("/verify-otp", verifyEmailOtp);  // verify signup OTP
router.post("/set-password", setPassword);   // set password after OTP

// Login
router.post("/login", login);

// Forgot password flow
router.post("/forgot-password", forgotPassword);       // send reset OTP
router.post("/verify-forgot-otp", verifyResetOtp);     // verify reset OTP
router.post("/reset-password", resetPassword);         // reset password

module.exports = router;
