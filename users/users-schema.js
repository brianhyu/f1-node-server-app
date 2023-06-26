import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    team: {
      type: String,
      enum: ["admin", "spectator", "driver"]
    },
    role: {
      type: String,
      enum: ["admin", "spectator", "driver"],
      default: "spectator",
    },
    dob: Date,
    created: { type: Date, default: Date.now },
    married: { type: Boolean, default: false },
  },
  { collection: "users" }
);

export default usersSchema;
