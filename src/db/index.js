import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        console.log("ENV:", process.env.MONGODB_URI); // debug

        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`MongoDB connected ✅ HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;