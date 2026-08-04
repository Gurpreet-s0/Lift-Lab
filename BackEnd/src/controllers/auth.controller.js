const userModel = require("../models/user.model");
const blackListedModel = require("../models/blackList.model")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AUTH_COOKIE_NAME = "jwt_token";
const AUTH_COOKIE_MAX_AGE = 10 * 24 * 60 * 60 * 1000;

const authCookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "None",
  maxAge: AUTH_COOKIE_MAX_AGE,
  path: "/",
};

const clearAuthCookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "None",
  path: "/",
};

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
    experience
  });

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_TOKEN,
    { expiresIn: "10d" },
  );

  res.cookie(AUTH_COOKIE_NAME, token, authCookieOptions)

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
  const { email, username, password } = req.body;
  const user = await userModel.findOne({
    $or: [{ username }, { email }],
  }).select("+password");
  if (!user) {
    return res.status(400).json({
      message: "Invalid Credentials",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign({
    id: user._id,
    username: user.username,
  }, process.env.JWT_TOKEN, { expiresIn: "10d" })

  res.cookie(AUTH_COOKIE_NAME, token, authCookieOptions);

  res.status(200).json({
    message: "User Logged in",
    user: {
      username,
      email,
      age: user.age,
      gender: user.gender,
      height: user.height,
      weight: user.weight,
      goal: user.goal,
      experience: user.experience
    }
  })
}

async function getMeController(req, res) {
  const userId = req.user.id

  const user = await userModel.findById(userId)

  if (!user) {
    return res.status(400).json({
      message: "User not found"
    })
  }

  res.status(200).json({
    message: "user fetched successfully",
    user
  })

}

async function logOutController(req, res) {
  const token = req.cookies[AUTH_COOKIE_NAME]
  res.clearCookie(AUTH_COOKIE_NAME, clearAuthCookieOptions)

  if (token) {
    await blackListedModel.create({
      token: token
    })
  }
  res.status(200).json({
    message: "LogOut successfully"
  })
}


module.exports = {
  loginController,
  registerController,
  getMeController,
  logOutController
};
