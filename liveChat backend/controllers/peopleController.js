const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET
const User = require("../models/userModel")

const profileData = (req, res) => {
  const token = req.cookies?.token
  if (token) {
    jwt.verify(token, jwtSecret, {}, (err, userData, next) => {
      if (err) next(err)
      else res.json(userData)
    })
  } else {
    res.status(401).json({ error: "Unauthorized" })
  }
}

const peopleData = async (req, res) => {
  const users = await User.find({}, { _id: 1, username: 1 })
  res.json(users)
}

module.exports = {
  profileData,
  peopleData,
}
