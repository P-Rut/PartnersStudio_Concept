const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const User = require("./models/User")
const Message = require("./models/Message")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const websockets = require("ws")
const fs = require("fs")

dotenv.config()
mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) throw err
})
const jwtSecret = process.env.JWT_SECRET
const bcryptSalt = bcrypt.genSaltSync(10)

const app = express()
app.use("/uploads", express.static(__dirname + "/uploads"))
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
)

async function getUserDataFromToken(req) {
  return new Promise((resolve, reject) => {
    const token = req.cookies?.token
    if (token) {
      jwt.verify(token, jwtSecret, {}, (err, userData) => {
        if (err) throw err
        resolve(userData)
      })
    } else {
      reject("No token !")
    }
  })
}

app.get("/test", (req, res) => {
  res.json("test ok")
})

app.get("/messages/:userID", async (req, res) => {
  const { userID } = req.params
  const userData = await getUserDataFromToken(req)
  const ourUserID = userData.userID
  console.log(userID, ourUserID)
  const messages = await Message.find({
    sender: { $in: [userID, ourUserID] },
    recipient: { $in: [userID, ourUserID] },
  }).sort({ createdAt: 1 })
  res.json(messages)
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
  console.log("login", req.body)
  if (username && password) {
    const foundUser = await User.findOne({ username })
    if (foundUser) {
      const passwordOK = bcrypt.compareSync(password, foundUser.password)
      if (passwordOK) {
        jwt.sign(
          { userID: foundUser._id, username },
          jwtSecret,
          {},
          (err, token) => {
            res
              .cookie("token", token, { sameSite: "none", secure: true })
              .json({
                id: foundUser._id,
              })
          }
        )
      }
    } else {
      res.status(401).json({ message: "Invalid username or password" })
    }
  }
  if (username) {
    const foundOpenUser = await User.findOne({ username })
    if (foundOpenUser) {
      jwt.sign(
        { userID: foundOpenUser._id, username },
        jwtSecret,
        {},
        (err, token) => {
          res.cookie("token", token, { sameSite: "none", secure: true }).json({
            id: foundOpenUser._id,
          })
        }
      )
    } else {
      res.status(401).json({ message: "Invalid identifier" })
    }
  }
})

app.post("/open", async (req, res) => {
  const { username } = req.body
  try {
    const createOpenUser = await User.create({
      username: username,
    })
    jwt.sign(
      { userID: createOpenUser._id, username },
      jwtSecret,
      {},
      (err, token) => {
        if (err) throw err
        res
          .cookie("token", token, { sameSite: "none", secure: true })
          .status(201)
          .json({
            id: createOpenUser._id,
          })
      }
    )
  } catch (err) {
    if (err) throw err
    res.status(500).json("error")
  }
})

app.post("/logout", (req, res) => {
  res.cookie("token", "", { sameSite: "none", secure: true }).json("ok")
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

app.get("/people", async (req, res) => {
  const users = await User.find({}, { _id: 1, username: 1 })
  res.json(users)
})

const server = app.listen(7007, () =>
  console.log("Server is runing on port", 7007)
)

//websockets server

const webSocketServer = new websockets.WebSocketServer({ server })
webSocketServer.on("connection", (connection, req) => {
  console.log("Connected to WebSocketServer !")
  function notifyAboutOnlinePeople() {
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
  }

  connection.isAlive = true

  connection.timer = setInterval(() => {
    connection.ping()
    connection.deathTimer = setTimeout(() => {
      connection.isAlive = false
      clearInterval(connection.timer)
      connection.terminate()
      notifyAboutOnlinePeople()
      console.log("Dead")
    }, 1000)
  }, 5000)

  connection.on("pong", () => {
    clearTimeout(connection.deathTimer)
  })

  //read username and id from cookie for this connection
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

  // sending message
  connection.on("message", async (message) => {
    const messageData = JSON.parse(message.toString())
    const { recipient, text, file } = messageData
    let filename = null
    if (file) {
      const parts = file.name.split(".")
      const ext = parts[parts.length - 1]
      filename = Date.now() + "." + ext
      const path = __dirname + "/uploads/" + filename
      const bufferData = Buffer.from(file.data.split(",")[1], "base64")
      fs.writeFile(path, bufferData, () => {
        console.log("!File saved" + path)
      })
    }
    if (recipient && (text || file)) {
      const messageDocument = await Message.create({
        sender: connection.userID,
        recipient,
        text,
        file: file ? filename : null,
      })
      console.log("message created")
      ;[...webSocketServer.clients]
        .filter((client) => client.userID === recipient)
        .forEach((client) =>
          client.send(
            JSON.stringify({
              text,
              sender: connection.userID,
              recipient,
              file: file ? filename : null,
              _id: messageDocument._id,
            })
          )
        )
    }
  })

  //notify everyone about online users( when someone  log in )
  notifyAboutOnlinePeople()
})
