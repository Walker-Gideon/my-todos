import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import router from "./routes/index.js";

const app = express();
const PORT = process.env.port || 5000;

mongoose.connect(process.env.MONGODB_URL).then(() => console.log("Connected to MongoDB")).catch((err) => console.log(err));

app.use(router);

app.listen(PORT, () => {
    console.log(`Server on: ${PORT}`);
})
