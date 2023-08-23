const Message = require("../models/messageModel")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET
const dotenv = require("dotenv")
dotenv.config()

async function getUserDataFromToken(req) {
  return new Promise((resolve, reject) => {
    const token = req.cookies?.token
    if (token) {
      jwt.verify(token, jwtSecret, {}, (err, userData, next) => {
        if (err) next(err)
        else resolve(userData)
      })
    } else {
      reject("No token !")
    }
  })
}

const getMessages = async (req, res) => {
  const { userID } = req.params
  const userData = await getUserDataFromToken(req)
  const ourUserID = userData.userID
  console.log(userID, ourUserID)
  const messages = await Message.find({
    sender: { $in: [userID, ourUserID] },
    recipient: { $in: [userID, ourUserID] },
  }).sort({ createdAt: 1 })
  res.json(messages)
}

module.exports = {
  getMessages,
}
