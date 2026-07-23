const express = require("express")
const identifyUser = require("../middleware/auth.middleware")
const { startSessionController, logSessionController, finishSessionController, cancelSessionController, activeSessionController } = require("../controllers/session.controller")

const workoutSessionRouter = express.Router()

workoutSessionRouter.post("/startSession",identifyUser,startSessionController)
workoutSessionRouter.patch("/logExercise/:sessionId",identifyUser,logSessionController)
workoutSessionRouter.patch("/finish/:sessionId",identifyUser,finishSessionController)
workoutSessionRouter.delete("/cancel/:sessionId",identifyUser,cancelSessionController)
workoutSessionRouter.get("/activeSession",identifyUser,activeSessionController)

module.exports = workoutSessionRouter