import { config as configDotenv } from "dotenv";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
configDotenv();
const port = process.env.PORT;

const jokes = [
  { id: 1, joke: "This is a joke from Backend" },
  { id: 2, joke: "This is another joke from Backend" },
  { id: 3, joke: "This is a joke too from Backend" },
  { id: 4, joke: "This is a joke as well from Backend" },
  { id: 5, joke: "This is a joke also from Backend" },
];
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/api/jokes", function (req, res) {
  res.send(jokes[2].joke);
});
app.listen(port, () =>
  console.log(`Server is live at http://localhost:${port}`)
);
