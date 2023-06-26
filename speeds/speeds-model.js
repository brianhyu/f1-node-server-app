import mongoose from "mongoose";
import speedsSchema from "./speeds-schema.js";
const speedsModel = mongoose.model("speeds", speedsSchema);
export default speedsModel;
