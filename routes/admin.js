const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");

adminRouter.post("/signup",  function(req, res) {
    
    res.json({
        message: "Signup succeeded"
    })
})

adminRouter.post("/signin",  function(req, res) {
    res.json({
        message: "Signup succeeded"
    })
})

adminRouter.post("/course",   function(req, res) {
    res.json({
        message: "Signup succeeded"
    })
})

adminRouter.put("/course",   function(req, res) {
    res.json({
        message: "Signup succeeded"
    })
})

adminRouter.get("/course/bulk",  function(req, res) {

    res.json({
        message: "Course updated",
        courses
    })
})

module.exports = {
    adminRouter: adminRouter
}