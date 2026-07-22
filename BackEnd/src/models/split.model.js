const mongoose = require("mongoose")

const exerciseSchema = new mongoose.Schema({
    exercise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exercises",
        required:true
    },
    
    sets: {
        type: Number,
        required: [true, "sets are required"]
    },
    reps: {
        type: String,
        required:true
    }
}, { _id: false })

const workoutDaySchema = new mongoose.Schema({
    day: {
        type: Number,
        enum: [1, 2, 3, 4, 5, 6, 7],
        required: [true, "Day is required"]
    },
    restDay: {
        type: Boolean,
        default:false
    },
    workoutName: {
        type: String,
        required: [true, "Workout name is required"]
    },
    exercises: [exerciseSchema]
},{_id:false})

const splitSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,"User is required"],
        unique:true
    },
    splitName: {
        type: String,
        enum:["PPL","Upper Lower PPL","Upper Lower","Bro Split","Full Body","Custom"],
        required: [true, "Split Name is required"]
    },
    workoutDays:[workoutDaySchema]

},{timestamps:true})

const splitModel = mongoose.model("WorkoutSplit",splitSchema)

module.exports = splitModel