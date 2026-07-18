const { default: ImageKit } = require("@imagekit/nodejs")
const exerciseModel = require("../models/exercises.model")
const splitModel = require("../models/split.model")
const image_kit = require("@imagekit/nodejs").default

const client = new image_kit({
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
})

async function exerciseController(req, res) {
    const { Name, muscleGroup, equipment, difficulty } = req.body
    const image = req.file
    const file = await client.files.upload({
        file: await ImageKit.toFile(image.buffer, "image"),
        fileName: Name
    })

    const exercise = await exerciseModel.create({
        Name: Name,
        muscleGroup: muscleGroup,
        equipment: equipment,
        difficulty: difficulty,
        image: file.url,
        thumbnailImage: file.thumbnailUrl
    })

    res.status(201).json({
        message: "Exercise created Successfully",
        exercise: exercise
    })
}

async function splitController(req, res) {
    const { splitName, workoutDays } = req.body

    const workout = await splitModel.create({
        user: req.user.id,
        splitName: splitName,
        workoutDays: workoutDays
    })

    res.status(201).json({
        message: "Your Workout Split is created",
        workout: workout
    })
}



module.exports = {
    exerciseController,
    splitController
}