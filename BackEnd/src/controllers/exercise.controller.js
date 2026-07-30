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

async function getExerciseController(req, res) {

    const exercises = await exerciseModel.find()

    res.status(200).json({
        exercises
    })
}

async function uploadSplitController(req, res) {
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

        const updatedWorkoutDays = workoutDays.map(day => {

            const workoutName = day.workoutName?.trim();

            const isRestDay =
                !workoutName ||
                workoutName.toLowerCase() === "rest";

            return {
                ...day,
                workoutName: isRestDay ? "Rest" : workoutName,
                restDay: isRestDay,
                exercises: isRestDay ? [] : day.exercises
            };
        });

        const workout = await splitModel.create({
            user: req.user.id,
            splitName: splitName,
            workoutDays: updatedWorkoutDays
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

async function getSplitController(req, res) {
    try {
        const userId = req.user.id

        const split = await splitModel.findOne({
            user: userId
        }).populate('workoutDays.exercises.exercise')

        if (!split) {
            return res.status(200).json({
                message: "Split Not Found",
                split: null
            })
        }

        return res.status(200).json({
            message: "Split Fetched Successfully",
            split
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })

    }
}

async function updateSplitController(req, res) {
    try {
        const userId = req.user.id
        const { splitName, workoutDays } = req.body

        const split = await splitModel.findOne({ user: userId })

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
            message: "Split Updated Successfully",
            updatedSplit
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })

    }

}

async function getTodaySplitController(req, res) {
    try {
        const userId = req.user.id
        const day = new Date().getDay() || 7
        const split = await splitModel.findOne({ user: userId }).populate("workoutDays.exercises.exercise")
        if (!split) {
            return res.status(404).json({
                message: "Workout split not found"
            });
        }
        const todayExercises = split.workoutDays.find((e) => { return e.day == day })
        if (!todayExercises) {
            return res.status(404).json({
                message: "No workout scheduled for today"
            });
        }
        return res.status(200).json({
            message: "Todays Exercises Fetched Successfully",
            todayExercises,
            id:split._id
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error"
        })

    }

}



module.exports = {
    exerciseController,
    uploadSplitController,
    getSplitController,
    updateSplitController,
    getTodaySplitController,
    getExerciseController
}