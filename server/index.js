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

const mongooseConnect = async () => {
  try {
    const dbOptions = {
      // "admin" is default
      user: process.env.DB_USER,
      // "default_password" is default
      pass: process.env.DB_PASS,
      // "admin" is default
      authSource: process.env.DB_AUTHSOURCE,
    };
    const res = await mongoose.connect(process.env.DB_URI, dbOptions);
    console.log("DB CONNECTED");
    return res;
  } catch (err) {
    console.error("DB connection failed:", err.message);
    throw err;
  }
};

const ensureDBConnection = async (retries = 10, delay = 10000) => {
  for (let i = 0; i < retries; i++) {
    if (mongoose.connection.readyState === 1) {
      console.log("Database is already connected!");
      return; // Exit if the connection established
    }

    try {
      console.log("Trying to connect to the database...");
      await mongooseConnect();
      return; // Exit if the connection established
    } catch (err) {
      console.error(`Retry ${i + 1}/${retries} failed: ${err.message}`);
      if (i < retries - 1) {
        console.log(`Waiting ${delay / 1000} seconds before retrying...`);
        await new Promise((res) => setTimeout(res, delay)); // Wait after retry
      }
    }
  }

  console.error("Failed to connect to the database after maximum retries.");
  process.exit(1); // Exit if retries = 0
};

(async () => {
  await ensureDBConnection(20, 10000); // 20 tries with 10 sec interval
  const port = process.env.PORT || 4000;

  app.use("/", router);

  // Start server only after connection with DB
  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})();
