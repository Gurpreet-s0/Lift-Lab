const express = require("express")
const { exerciseController, splitController, getSplitController, updateSplitController, getTodaySplitController } = require("../controllers/exercise.controller")
const exerciseRouter = express.Router()
const multer = require("multer")
const identifyUser = require("../middleware/auth.middleware")

const storage = multer.memoryStorage()
const upload = multer({storage:storage})

exerciseRouter.post("/upload_exercise",upload.single("exerciseImage"),exerciseController)
exerciseRouter.post("/upload_split",identifyUser,splitController)
exerciseRouter.get("/getSplit",identifyUser,getSplitController)
exerciseRouter.patch("/updateSplit",identifyUser,updateSplitController)
exerciseRouter.get("/getTodaySplit",identifyUser,getTodaySplitController)

module.exports = exerciseRouter