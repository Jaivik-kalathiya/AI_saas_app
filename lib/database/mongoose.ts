
// import mongoose, { Mongoose } from "mongoose";

// const MONGODB_URL = process.env.MONGODB_URL;

// interface MongooseConnection {
//   conn: Mongoose | null;
//   promise: Promise<Mongoose> | null;
// }

// let cached: MongooseConnection = (global as any).mongoose;

// if (!cached) {
//   cached = (global as any).mongoose = { conn: null, promise: null };
// }
// export const connectToDatabase = async () => {
//   if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");

//   cached.promise =
//     cached.promise ||
//     mongoose.connect(MONGODB_URL, {
//       dbName: "imaginify",
//       bufferCommands: false,
//     });
    
//     cached.conn = await cached.promise;


// };

import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL)
    return console.log("No MONGODB_URL found in .env file");

  if (isConnected) return console.log("Already connected to DB");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    // console.log("i am near to connect")
    isConnected = true;
    console.log("Connection to DB successful");
  } catch (error) {
    console.log("Error connecting to DB: ", error);
  }
};


