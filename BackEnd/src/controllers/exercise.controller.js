const { default: ImageKit } = require("@imagekit/nodejs")
const exerciseModel = require("../models/exercises.model")
const splitModel = require("../models/split.model")
const image_kit = require("@imagekit/nodejs").default
const userModel = require("../models/user.model")
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
    try {
        const { splitName, workoutDays } = req.body

        if (!splitName || !workoutDays) {
            return res.status(400).json({
                message: "Invalid Data"
            })
        }

        const existingSplit = await splitModel.findOne({
            user: req.user.id
        })

        if (existingSplit) {
            return res.status(409).json({
                message: "Split Already Exist"
            })
        }
        const workout = await splitModel.create({
            user: req.user.id,
            splitName: splitName,
            workoutDays: workoutDays
        })

        await userModel.findByIdAndUpdate(req.user.id, {
            workoutSplit: workout._id
        })

        res.status(201).json({
            success: true,
            message: "Your Workout Split is created",
            workout: workout
        })
    }
    catch (err) {
        console.log(err);

        return res.status(500).json({

            message: "Internal Server Error"

        })

    }
}

async function getSplitController(req,res){
    try {
        const userId = req.user.id

    const split = await splitModel.findOne({
        user:userId
    }).populate('workoutDays.exercises.exercise')

    if(!split){
        return res.status(404).json({
            message:"Split Not Found"
        })
    }

    return res.status(200).json({
        message:"Split Fetched Successfully",
        split
    })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Internal Server Error"
        })
        
    }
}

async function updateSplitController(req,res){
    try {
        const userId = req.user.id
    const {splitName,workoutDays} = req.body

    const split = await splitModel.findOne({user:userId})

    if (!split) {
    return res.status(404).json({
        message: "Split not found"
    });
}

   const updatedSplit = await splitModel.findOneAndUpdate(
    { user: userId },
    {
        splitName,
        workoutDays
    },
    {
        new: true,
        runValidators: true
    }
);

    return res.status(200).json({
        message:"Split Updated Successfully",
        updatedSplit
    })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Internal Server Error"
        })
        
    }

}

module.exports = {
    exerciseController,
    splitController,
    getSplitController,
    updateSplitController
}