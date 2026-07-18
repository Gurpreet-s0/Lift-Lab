const mongoose = require("mongoose")

const exerciseSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "name is required"]
    },
    muscleGroup: {
        type: String
    },
    equipment: {
        type: String
    },
    difficulty: {
        type: String,
        enum:{
            values: ["Beginner", "Intermediate", "Advanced"]
        }
    },
    image: {
        type: String
    },
    thumbnailImage:{
        type:String
    }
})

const exerciseModel = mongoose.model("Exercises", exerciseSchema)

module.exports = exerciseModel