import { config as configDotenv } from "dotenv";
import connectDB from "./db/db.js";
import express from "express";
const app = express();
configDotenv();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () =>
      console.log(`Server at http://localhost:${process.env.PORT}`)
    );
    console.log("DB Connected");
  })
  .catch(() => console.log("Something Went Wrong in DB connection"));
