const express = require("express");
const connectDB = require("./db");
const routes = require("./routes");

require("dotenv").config();

// Initalize express app
const app = express();

// Initialize middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//  Initialize Routes
routes(app);

// Initialize Database and Start Server
const PORT = process.env.PORT || 4000;
(async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`App running on port ${PORT}`));
})();
