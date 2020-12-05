import User from "../models/userModel.js";
import asyncHanlder from "express-async-handler";
import generateToken from "../utils/generateToken.js";

// @desc    Auth user and get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHanlder(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or password");
  }
});

// @desc    Loggedin user
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHanlder(async (req, res) => {
  res.send("Success");
});

export { authUser, getUserProfile };
