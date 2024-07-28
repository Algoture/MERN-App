import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    email: {
      lowercase: true,
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
