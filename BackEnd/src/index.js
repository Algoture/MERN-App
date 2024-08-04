import { config as configDotenv } from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";

const app = express();

app.use(cors());
configDotenv();

connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
