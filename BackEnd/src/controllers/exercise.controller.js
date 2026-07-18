const { default: ImageKit } = require("@imagekit/nodejs")
const exerciseModel = require("../models/exercises.model")
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

module.exports = {
    exerciseController
}