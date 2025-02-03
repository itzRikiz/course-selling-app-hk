const { Router} = require('express')
const { adminModel, courseModel } = require("../db");
const courseRouter = Router()
courseRouter.post("courses", (req, res) => {
    req.json({
      message: "courseRouter",
    });
  });

  module.exports={
    courseRouter:courseRouter
  }