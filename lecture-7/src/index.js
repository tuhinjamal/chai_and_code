// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import connectDB from "./db/index.js";
connectDB();

// this is not a good way to make database connection
/*import express from express;
const app = express();
(async () => {
  try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on("error", (error) => {
          console.log("ERROR", error)
          throw error
      })
      app.liste(process.env.PORT, () => {
          console.log(`app is listening on port ${process.env.PORT}`);
      })
  } catch (error) {
    console.log("ERROR", error);
    throw error;
  }
})(); //iffi*/
