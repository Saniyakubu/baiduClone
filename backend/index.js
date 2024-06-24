import "dotenv/config";
import express, { response } from "express";
import { getJson } from "serpapi";
import path from "path";

const app = express();

import cors from "cors";
import cookieParser from "cookie-parser";
app.use(
  cors({
    origin: [
      "http://localhost:5173/",
      "http://localhost:5173",
      "https://baiduclone.onrender.com/",
      "https://baiduclone.onrender.com",
      "https://baiduclone.onrender.com/results",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(process.env.API_KEY);
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
const getResponse = async (req, res) => {
  const { searchVal } = req.body;
  try {
    const response = await getJson({
      engine: "baidu",
      api_key: process.env.API_KEY, // Get your API_KEY from https://serpapi.com/manage-api-key
      q: searchVal,
      location: "Austin, Texas",
    });
    // console.log(response);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

app.post("/search", getResponse);

app.listen(PORT, () => {
  console.log(`app listening at port $ http://localhost:${PORT}/`);
});
