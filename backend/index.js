import "dotenv/config";
import express, { response } from "express";
import { getJson } from "serpapi";
const app = express();

import cors from "cors";
import cookieParser from "cookie-parser";
app.use(
  cors({
    origin: ["http://localhost:5173/", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(process.env.API_KEY);

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

app.post("/", getResponse);

app.listen(PORT, () => {
  console.log(`app listening at port $ http://localhost:${PORT}/`);
});
