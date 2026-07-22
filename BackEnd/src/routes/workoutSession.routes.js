const express = require("express")
const identifyUser = require("../middleware/auth.middleware")
const { startSessionController, logSessionController, finishSessionController } = require("../controllers/session.controller")

const workoutSessionRouter = express.Router()

workoutSessionRouter.post("/startSession",identifyUser,startSessionController)
workoutSessionRouter.patch("/logExercise/:sessionId",identifyUser,logSessionController)
workoutSessionRouter.patch("/finish/:sessionId",identifyUser,finishSessionController)

module.exports = workoutSessionRouter