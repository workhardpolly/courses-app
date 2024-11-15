const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

// Standart set up for bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Standart set up for CORS middleware
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Using router to create endpoints in a separate file
app.use("/", router);

const dbOptions = {};

mongoose
  .connect(process.env.DB_URI, dbOptions)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
