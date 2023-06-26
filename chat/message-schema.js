import mongoose from "mongoose";
const messageSchema = new mongoose.Schema(
  {
    body: String,
    chat: [{ type: mongoose.Schema.Types.ObjectId, ref: "chat" }],
    created: { type: Date, default: Date.now },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { collection: "messages" }
);

export default messageSchema;