const { Router } = require("express");
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const { adminModel, courseModel } = require("../db");
const { adminMiddleware } = require("../middlewares/admin");
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

adminRouter.post("/course", adminMiddleware, async function (req, res) {
  const adminID = req.userId;
  const { title, description, imageUrl, price } = req.body;
  const course = await courseModel.create({
    title: title,
    description: description,
    imageUrl: imageUrl,
    price: price,
    creatorId: adminID,
  });
  res.json({
    message: "Course Created",
    courseId: course._id,
  });
});

adminRouter.put("/course", adminMiddleware, async function (req, res) {
  const adminID = req.userId;
  const { title, description, imageUrl, price, courseId } = req.body;
  const course = await courseModel.updateOne(
    {
      _id: courseId,
      courseId: adminID,
    },
    {
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
    }
  );
  res.json({
    message: "Course Updated Successfully",
    courseId: course._id,
  });
});

adminRouter.get("/course/bulk", async function (req, res) {
  const courses = await courseModel.find({});
  res.json({
    courses,
  });
});

module.exports = {
  adminRouter: adminRouter,
};
