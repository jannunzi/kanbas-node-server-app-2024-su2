import mongoose from "mongoose";
import userSchema from "./schema.js";
const userModel = mongoose.model("UserModel", userSchema);
export default userModel;
