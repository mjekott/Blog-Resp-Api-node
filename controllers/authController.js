const User = require("../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  //Check for errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;
  try {
    // hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // initialize a user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
  }
};

exports.login = async (req, res) => {
  //Check for errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { username, password } = req.body;

  try {
    // find existing user in database
    const user = await User.findOne({ username });
    !user &&
      res.status(400).json({ statusCode: 400, message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    !isMatch &&
      res.status(400).json({ statusCode: 400, message: "Invalid credentials" });

    res.status(200).json(user);
  } catch (error) {}
};
