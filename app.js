import express from "express";
import booksRoute from "./routes/bookRoutes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(async (connection) => {
    console.log("MongoDB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/books", booksRoute);

const port = process.env.port || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
