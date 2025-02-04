const { Router } = require("express");
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const { adminModel } = require("../db");
const JWT_ADMIN_SECRET = "lord_sanmay_is_realHero";

adminRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;
  try {
    await adminModel.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });
    res.json({
      message: "Signup succeeded",
    });
  } catch (error) {
    res.status(403).json({
      message: "Wrong Credentials",
    });
  }
});

adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  const admin = await adminModel.findOne({
    email: email,
    password: password,
  });
  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_SECRET
    );
    res.json({
      message: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect Credentials",
    });
  }
});

adminRouter.post("/course", function (req, res) {
  res.json({
    message: "Signup succeeded",
  });
});

adminRouter.put("/course", function (req, res) {
  res.json({
    message: "Signup succeeded",
  });
});

adminRouter.get("/course/bulk", function (req, res) {
  res.json({
    message: "Course updated",
    courses,
  });
});

module.exports = {
  adminRouter: adminRouter,
};
