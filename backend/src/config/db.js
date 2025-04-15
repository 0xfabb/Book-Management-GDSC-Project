import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const uri =
  "mongodb+srv://vanshkhanna541:jMJ4T1qzoOmZQFIe@library-project-gdg.jpxqxrc.mongodb.net/?retryWrites=true&w=majority&appName=Library-Project-GDG";

export const connectToMongoDB = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`Mongodb Connected - ${conn.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
};
