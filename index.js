require("dotenv").config();
// const express = require("express"); // common js
const express = require("express"); //module js
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/yusuf", (req, res) => {
  res.send("Mujtaba Ahmadh Yusuf");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
