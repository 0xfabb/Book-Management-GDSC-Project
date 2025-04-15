import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const uri = process.env.PORT
export const connectToMongoDB = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`Mongodb Connected - ${conn.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
};
