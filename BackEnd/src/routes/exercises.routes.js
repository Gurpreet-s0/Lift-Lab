const express = require("express")
const { exerciseController } = require("../controllers/exercise.controller")
const exerciseRouter = express.Router()
const multer = require("multer")

const storage = multer.memoryStorage()
const upload = multer({storage:storage})

exerciseRouter.post("/upload_exercise",upload.single("exerciseImage"),exerciseController)

module.exports = exerciseRouter