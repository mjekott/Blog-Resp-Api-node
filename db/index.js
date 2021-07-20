const mongoose = require("mongoose");

// Create the connection function
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DATABASE CONNECTED");
  } catch (error) {
    console.error(error.message);

    // Exit with failure
    process.exit(1);
  }
};

module.exports = connectDb;
