import mongoose from "mongoose";
const speedsSchema = new mongoose.Schema(
  {
    topic: String,
    title: String,
    speed: String,
    created: { type: Date, default: Date.now },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { collection: "speeds" }
);

export default speedsSchema;
