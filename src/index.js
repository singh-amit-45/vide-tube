

import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})

import connectDB from "./db/index.js";  

connectDB()

















// Alternative approach to connect to MongoDB using Mongoose directly in this file

// import mongoose from "mongoose";
// import { DB_NAME} from "./constants";


// import express from "express";
// const app = express();

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.
// MONGODB_URI}/${DB_NAME}`)
// app.on("error", (error) => {
//     console.log("err",error);
//     throw error

// })
// app.listen(process.env.PORT,() => {
//     console.log(`App is listening on port $
//         {process.env.PORT}`);
// })

//     } catch (error) {
//         console.log("Error", error);
//         throw error
//     }
// })()