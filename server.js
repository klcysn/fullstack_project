const express = require("express")
const router = require("./routes/router")
require("dotenv").config() //to use .env file
const connectDB = require("./models/connectDB")
connectDB() // to triger connection at start

const app = express()

app.use(express.json())

app.use("/api", router)

app.listen(process.env.PORT, () => { console.log("I am listening") })