import mongoose from "mongoose";
import messageSchema from "./message-schema.js";
const messageModel = mongoose.model("message", messageSchema);
export default messageModel;