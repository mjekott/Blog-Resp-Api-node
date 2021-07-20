const express = require("express");
const connectDB = require("./db");

require("dotenv").config();

// Initalize express app
const app = express();

// Initialize Database and Start Server
const PORT = process.env.PORT || 4000;
(async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`App running on port ${PORT}`));
})();
