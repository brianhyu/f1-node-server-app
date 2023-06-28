import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    role: {
      type: String,
      enum: ["admin", "spectator", "driver"],
      default: "spectator",
    },
    created: { type: Date, default: Date.now },
    team: {
      type: String,
      enum: ["Ferrari", "Mercedes", 
      "Red Bull", "McLaren", 
      "Alpine", "AlphaTauri", 
      "Alfa Romeo", "Haas", 
      "Williams", "Aston Martin"],
      default: "Ferrari",
    }
  },
  { collection: "users" }
);

export default usersSchema;
