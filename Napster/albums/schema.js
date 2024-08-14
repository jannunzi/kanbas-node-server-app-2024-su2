import mongoose from "mongoose";
const albumSchema = new mongoose.Schema(
  {
    name: String,
    albumId: String,
    likedBy: [{ ref: "UserModel", type: mongoose.Schema.Types.ObjectId }],
  },
  { collection: "albums" }
);
export default albumSchema;
