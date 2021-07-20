const router = require("express").Router();
const authController = require("../controllers/authController");
const { check } = require("express-validator");

/**
 * @route POST /api/auth/register
 * @desc  Register a new user
 */
router.post(
  "/register",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "A valid password is required").exists(),
    check("username", "Please enter a  valid username").exists(),
  ],
  authController.register
);

/**
 * @route POST /api/auth/login
 * @desc  Login a user
 */
router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "A valid password is required").exists(),
    check("username", "Please enter a  valid username").exists(),
  ],
  authController.login
);

module.exports = router;
