const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: String,       // store OTP temporarily
  },
  otpExpires: {
    type: Date,         // expiry time for OTP
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
