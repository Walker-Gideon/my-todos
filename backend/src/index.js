const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

import router from "./routes/index.js";

const app = express();
const PORT = process.env.port || 5000;

app.use(router);

mongoose.connect(process.env.MONGODB_URL).then(() => console.log("Connected to MongoDB")).catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server on: ${PORT}`);
})
