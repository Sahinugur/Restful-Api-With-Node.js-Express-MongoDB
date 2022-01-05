import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import postsRoute from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use("/post", postsRoute);

//Routes

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to DB");
});

app.listen(3000, console.log("Server running on port 3000"));
