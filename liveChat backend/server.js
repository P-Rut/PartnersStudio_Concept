const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const Message = require("./models/messageModel.js")
const jwt = require("jsonwebtoken")
const websockets = require("ws")
const fs = require("fs")
const connectDB = require("./config/db")
const helmet = require("helmet")

dotenv.config()
connectDB()
const jwtSecret = process.env.JWT_SECRET

const app = express()
app.use(helmet())
app.use("/uploads", express.static(__dirname + "/uploads"))
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
)
app.use("/", require("./routes/messagesRoutes"))
app.use("/", require("./routes/userRoutes"))
app.use("/", require("./routes/peopleRoutes"))

app.get("/test", (req, res) => {
  res.json("Hello test")
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
