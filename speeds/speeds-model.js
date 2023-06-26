import mongoose from "mongoose";
import speedsSchema from "./speeds-schema.js";
const speedsModel = mongoose.model("tuits", speedsSchema);
export default speedsModel;
