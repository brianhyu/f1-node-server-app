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
    team: {
      type: String,
      enum: [
        "Mercedes AMG Motorsport",
        "Red Bull Racing",
        "Aston Martin F1 Team",
        "McLaren",
        "Ferrari",
        "Alpine F1 Team",
        "AlphaTauri",
        "Alfa Romeo Racing",
        "Williams",
        "Haas F1 Team"
      ] 
    },
    dob: Date,
    created: { type: Date, default: Date.now },
    married: { type: Boolean, default: false },
  },
  { collection: "users" }
);

export default usersSchema;
