import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true },
    likesAlbums: [{ ref: "Albums", type: mongoose.Schema.Types.ObjectId }],
    role: {
      type: String,
      default: "STUDENT",
      enum: ["STUDENT", "FACULTY", "ADMIN"],
    },
    firstName: String,
    lastName: String,
    dob: Date,
    doh: { type: Date, default: Date.now },
    loginId: String,
    lastActivity: Date,
    totalActivity: String,
  },
  { collection: "users" }
);

export default userSchema;
