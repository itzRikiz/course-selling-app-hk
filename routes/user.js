// const express = require("express")
// const userRouter = express.Router;

const { Router } = require('express')
const userRouter = Router()
const { adminModel, courseModel } = require("../db");

userRouter.post("/signup",(req,res)=>{
    req.json({
        message:"signup"
    })
})
userRouter.post("/signin",(req,res)=>{
    req.json({
        message:"signup"
    })
})
userRouter.post("/purchases",(req,res)=>{
    req.json({
        message:"signup"
    })
})

module.exports={
    userRouter:userRouter
}