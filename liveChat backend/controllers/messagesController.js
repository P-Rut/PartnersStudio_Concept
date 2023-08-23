const Message = require("../models/messageModel")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET
const dotenv = require("dotenv")
dotenv.config()

async function getUserDataFromToken(req) {
  return new Promise((resolve, reject) => {
    const token = req.cookies?.token
    if (token) {
      jwt.verify(token, jwtSecret, {}, (err, userData) => {
        if (err) reject("Unauthorized")
        else {
          resolve(userData)
        }
      })
    } else {
      reject("No token found")
    }
  })
}

const getMessages = async (req, res) => {
  const { userID } = req.params

  try {
    const userData = await getUserDataFromToken(req)
    const ourUserID = userData.userID
    console.log(userID, ourUserID)
    const messages = await Message.find({
      sender: { $in: [userID, ourUserID] },
      recipient: { $in: [userID, ourUserID] },
    }).sort({ createdAt: 1 })
    res.json(messages)
  } catch (error) {
    res.status(401).json({ error })
  }
}

module.exports = {
  getMessages,
}
