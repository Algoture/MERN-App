import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const dbconnection = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(dbconnection.connection.port);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;