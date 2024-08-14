import mongoose from "mongoose";
import albumSchema from "./schema.js";
const albumModel = mongoose.model("Albums", albumSchema);
export default albumModel;
