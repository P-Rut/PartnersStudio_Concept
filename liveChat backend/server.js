const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const User = require("./models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const websockets = require("ws")

dotenv.config()
mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) throw err
})
const jwtSecret = process.env.JWT_SECRET
const bcryptSalt = bcrypt.genSaltSync(10)

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
)

app.get("/test", (req, res) => {
  res.json("test ok")
})

app.get("/profile", (req, res) => {
  const token = req.cookies?.token

  if (token) {
    jwt.verify(token, jwtSecret, {}, (err, userData) => {
      if (err) throw err
      res.json(userData)
    })
  } else {
    res.status(401).json("No token!")
  }
})

app.post("/login", async (req, res) => {
  const { username, password } = req.body
  const foundUser = await User.findOne({ username })
  if (foundUser) {
    const passwordOK = bcrypt.compareSync(password, foundUser.password)
    if (passwordOK) {
      jwt.sign(
        { userID: foundUser._id, username },
        jwtSecret,
        {},
        (err, token) => {
          res.cookie("token", token, { sameSite: "none", secure: true }).json({
            id: foundUser._id,
          })
        }
      )
    }
  }  
})

app.post("/register", async (req, res) => {
  const { username, password } = req.body
  try {
    const hashedPassword = bcrypt.hashSync(password, bcryptSalt)
    const createdUser = await User.create({
      username: username,
      password: hashedPassword,
    })
    //creating encoded token with user id and username
    jwt.sign(
      { userID: createdUser._id, username },
      jwtSecret,
      {},
      (err, token) => {
        if (err) throw err
        res
          .cookie("token", token, { sameSite: "none", secure: true })
          .status(201)
          .json({
            id: createdUser._id,
          })
      }
    )
  } catch (err) {
    if (err) throw err
    res.status(500).json("error")
  }
})

const server = app.listen(7007, () =>
  console.log("Server is runing on port", 7007)
)

//websockets server

const webSocketServer = new websockets.WebSocketServer({ server })
webSocketServer.on("connection", (connection, req) => {
  console.log("Connected to WebSocketServer !")

  const cookies = req.headers.cookie
  if (cookies) {
    const tokenCookieStirng = cookies
      .split(";")
      .find((string) => string.startsWith("token="))
    if (tokenCookieStirng) {
      const token = tokenCookieStirng.split("=")[1]
      if (token) {
        jwt.verify(token, jwtSecret, {}, (err, userData) => {
          if (err) throw err
          const { userID, username } = userData
          connection.userID = userID
          connection.username = username
        })
      }
    }
  }
  //see who is online
  // console.log([...webSocketServer.clients].map((check) => check.username))

  ;[...webSocketServer.clients].forEach((client) => {
    client.send(
      JSON.stringify({
        online: [...webSocketServer.clients].map((client) => ({
          userID: client.userID,
          username: client.username,
        })),
      })
    )
  })
})