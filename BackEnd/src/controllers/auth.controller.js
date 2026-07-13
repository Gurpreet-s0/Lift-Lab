const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const {
    username,
    email,
    password,
    age,
    gender,
    height,
    weight,
    goal,
    experience,
  } = req.body;

  const isUserExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (isUserExist) {
    return res.status(400).json({
      message: "User already exist",
    });
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hashedPass,
    age,
    gender,
    height,
    weight,
    goal,
    experience,
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      username: user.username,
    },
    process.env.JWT_TOKEN,
    { expiresIn: "10d" },
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "User created Successfully",
    user: {
      username,
      email,
      age,
      gender,
      height,
      weight,
      goal,
      experience,
    },
  });
}

async function loginController(req, res) {
    const {email,username,password} = req.body
    
}

module.exports = {
  loginController,
  registerController,
};
