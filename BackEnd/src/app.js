const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const authRouter = require("./routes/auth.routes")
const cookie = require("cookie-parser")
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(cookie())
app.use("/api/auth",authRouter)

module.exports = app