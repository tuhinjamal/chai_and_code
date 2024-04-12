// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import tuhinjamal from "./tuhinjamal.js";
const app = express();
app.get("/", (req, res) => {
  res.json(tuhinjamal);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
