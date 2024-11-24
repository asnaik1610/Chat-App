import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"; // use extension js bcoz we're using type of 'module'
import { connectDB } from "./lib/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log("Server is Running om PORT: " + PORT);
  connectDB();
});