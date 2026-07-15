const express = require("express")
const { loginController, registerController ,getMeController ,logOutController } = require("../controllers/auth.controller")
const identifyUser = require("../middleware/auth.middleware")
const authRouter = express.Router()

authRouter.post("/register",registerController)
authRouter.post("/login",loginController)
authRouter.get("/getMe",identifyUser,getMeController)
authRouter.post("/logout",logOutController)

module.exports = authRouter