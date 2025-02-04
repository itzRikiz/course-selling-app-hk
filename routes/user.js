// const express = require("express")
// const userRouter = express.Router;

const { Router, json } = require("express");
const userRouter = Router();
const jwt = require("jsonwebtoken");
const JWT_USER_SECRET = "sanmay_is_realHero";
const { userModel } = require("../db");

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  // hash with bcrypt
  try {
    await userModel.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });

    res.json({
      message: "signup Successful",
    });
  } catch (error) {
    res.json({
      message: "Email Already Exist!",
    });
  }
});
userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email: email,
    password: password,
  });
  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_SECRET
    );
    // do cookie logic
    res.json({
      message: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect Credentials",
    });
  }
});
userRouter.post("/purchases", (req, res) => {
  res.json({
    message: "signup",
  });
});

module.exports = {
  userRouter: userRouter,
};
