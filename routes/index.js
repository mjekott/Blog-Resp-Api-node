const authRoute = require("./auth");
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({ statusCode: 200, message: "Conenct to Blog api" });
  });
  app.use("/api/auth", authRoute);
};
