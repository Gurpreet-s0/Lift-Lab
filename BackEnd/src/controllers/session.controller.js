const exerciseModel = require("../models/exercises.model")
const splitModel = require("../models/split.model")
const workoutSessionModel = require("../models/workoutsession.model")

async function startSessionController(req, res) {
    try {
        const user = req.user.id
        const { workoutName, workoutSplit } = req.body

        if (!workoutName || !workoutSplit) {
            return res.status(400).json({
                message: "Workout Name or Workout Session must be given"
            })
        }
        const isSplitValid = await splitModel.findOne({
            _id: workoutSplit,
            user
        })

        if (!isSplitValid) {
            return res.status(404).json({
                message: "Your Split is not valid"
            })
        }

        const session = await workoutSessionModel.create({
            user,
            workoutName,
            workoutSplit,
            startedAt: Date.now(),
        })

        return res.status(201).json({
            message: "A Session is created",
            sessionId: session._id
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }

}

async function logSessionController(req, res) {
    try {
        const user = req.user.id
        const { exercise, sets } = req.body
        const sessionId = req.params.sessionId

        const session = await workoutSessionModel.findOne({
            user: user,
            _id: sessionId
        })

        if (!session) {
            return res.status(404).json({
                message: "Session is Invalid"
            })
        }
        if (session.completed) {
            return res.status(400).json({
                message: "Workout session is already completed."
            });
        }
        const isExerciseValid = await exerciseModel.findById(exercise)

        if (!isExerciseValid) {
            return res.status(400).json({
                message: "Not a valid Exercise"
            })
        }

        session.exercisesDone.push({
            exercise,
            sets
        })
        await session.save()

        res.status(200).json({
            message: "Exercises Logged Successfully",
            session
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

async function finishSessionController(req, res) {
    try {
        const sessionId = req.params.sessionId
        const user = req.user.id

        const session = await workoutSessionModel.findOne({
            user,
            _id: sessionId
        })
        if (!session) {
            return res.status(404).json({
                message: "Session not found"
            })
        }

        if (session.completed) {
            return res.status(400).json({
                message: "Session is already finished"
            })
        }

        session.status = "Completed"
        session.endedAt = Date.now()
        const totalTime = Math.floor((session.endedAt - session.startedAt) / 1000 / 60)
        session.duration = totalTime
        await session.save()

        res.status(200).json({
            message: "Session is Finished successfully",
            totalTime,
            session
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

async function cancelSessionController(req, res) {
    try {
        const sessionId = req.params.sessionId
        const user = req.user.id
        const session = await workoutSessionModel.findOne({
            user,
            _id: sessionId
        })

        if (!session) {
            return res.status(404).json({
                message: "Session is not active"
            })
        }

        if (session.status == "Completed") {
            return res.status(400).json({
                message: "Session is Completed"
            })
        }

        if (session.status == "Cancelled") {
            return res.status(400).json({
                message: "Session is Already Cancelled"
            })
        }

        session.status = "Cancelled"
        session.endedAt = Date.now()
        session.duration = Math.floor((session.endedAt - session.startedAt) / 1000 / 60)
        await session.save()

        res.status(200).json({
            message: "Workout session cancelled successfully.",
            session,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

async function activeSessionController(req, res) {
    try {
        const user = req.user.id
         const session = await workoutSessionModel.findOne({
            user,
            status:"Active"
         })
         if(!session){
            return res.status(404).json({
                message:"No active workout session found."
            })
         }

         res.status(200).json({
            message:"Active Session Fetched Successfully",
            sessionId:session._id
         })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


module.exports = {
    startSessionController,
    logSessionController,
    finishSessionController,
    cancelSessionController,
    activeSessionController
}