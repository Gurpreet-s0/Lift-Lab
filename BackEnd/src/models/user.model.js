const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      select :false
    },

    age: {
      type: Number,
      required: [true, "Age is required"],
      min: 10,
    },
    profilePicture: {
      type: String,
      default: "https://ik.imagekit.io/guri/137420f5b9c39bc911e472f5d20f053e.webp?updatedAt=1779876093331",
    },

    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: {
        values: ["Male", "Female"],
        message: "{VALUE} is not a valid gender",
      },
    },

    height: {
      type: Number,
      required: [true, "Height is required"],
      min: 50,
    },

    weight: {
      type: Number,
      required: [true, "Weight is required"],
      min: 20,
    },

    goal: {
      type: String,
      required: [true, "Goal is required"],
      enum: {
        values: ["Muscle Gain", "Fat Loss", "Strength"],
        message: "{VALUE} is not a valid goal",
      },
    },

    experience: {
      type: String,
      required: [true, "Experience is required"],
      enum: {
        values: ["Beginner", "Intermediate", "Advanced"],
        message: "{VALUE} is not a valid experience level",
      },
    },
  },
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
