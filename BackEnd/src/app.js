const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const authRouter = require("./routes/auth.routes")
const cookie = require("cookie-parser")
const exerciseRouter = require("./routes/exercises.routes")
const workoutSessionRouter = require("./routes/workoutSession.routes")
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials:true
}))
app.use(express.json())
app.use(cookie())
app.use("/api/auth",authRouter)
app.use("/api/exercise",exerciseRouter)
app.use("/api/session",workoutSessionRouter)
app.get("/test-cookie", (req, res) => {
  res.cookie("test", "123", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  res.json({ ok: true });
});
module.exports = app