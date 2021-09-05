const path = require("path");
require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const colors = require("colors");
const errorHandler = require("./middleware/error");

// Connect DB
connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`.yellow.bold)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
