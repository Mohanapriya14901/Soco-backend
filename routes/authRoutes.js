const express = require("express");
const {
  sendEmailOtp,
  verifyEmailOtp,
  setPassword,
  login,
  forgotPassword,
  verifyResetOtp,
  resetPassword,
} = require("../controllers/userController");

const router = express.Router();

// Register → sends OTP
router.post("/register", (req, res) => {
  console.log("📩 Register route hit with body:", req.body);
  sendEmailOtp(req, res);
});

// Signup flow
router.post("/verify-otp", verifyEmailOtp);
router.post("/set-password", setPassword);

// Login
router.post("/login", login);

// Forgot password flow
router.post("/forgot-password", forgotPassword);
router.post("/verify-forgot-otp", verifyResetOtp);
router.post("/reset-password", resetPassword);

module.exports = router;
