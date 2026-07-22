const mongoose = require("mongoose")

const setSchema = new mongoose.Schema({
    reps:{
        type:Number,
        required:true,
        min:0
    },
    weight:{
        type:Number,
        required:true,
        min:0
    },
    note:{
        type:String,
        default:null
    }
},{_id:false})

const workoutLogSchema = new mongoose.Schema({
    exercise :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Exercises",
        required:true
    },
    sets:[setSchema]
},{_id:false})

const workoutSessionSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    workoutSplit:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"WorkoutSplit",
        required:true
    },
    workoutName:{
        type:String,
        required:true
    },
    startedAt:{
        type:Date,
        default:Date.now
    },
    endedAt:{
        type:Date,
        default:null
    },
    completed:{
        type:Boolean,
        default:false
    },
    duration:{
        type:Number,
        default:0
    },
    exercisesDone:[workoutLogSchema]
},{timestamps:true})

const workoutSessionModel = mongoose.model("WorkoutSession",workoutSessionSchema)

module.exports = workoutSessionModel