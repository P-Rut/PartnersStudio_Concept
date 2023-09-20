const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET
const bcrypt = require("bcryptjs")
const bcryptSalt = bcrypt.genSaltSync(10)

//Create new user account with login and passwoard e.g. for new support employee
const registerUser = async (req, res) => {
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
        if (err) {
          return res.status(500).json({ message: "Error creating token" })
        }
        res
          .cookie("token", token, { sameSite: "none", secure: true })
          .status(201)
          .json({
            id: createdUser._id,
          })
      }
    )
  } catch (err) {
    res.status(500).json({ message: "Error creating user" })
  }
}

//Login to existing user account with login and passwoard e.g. one of support employee
const loginUser = async (req, res) => {
  const { username, password } = req.body
  console.log("login", req.body)
  if (username && password) {
    try {
      const foundUser = await User.findOne({ username })
      if (!foundUser) {
        return res.status(401).json({ message: "Invalid username" })
      }

      const passwordOK = bcrypt.compareSync(password, foundUser.password)
      if (!passwordOK) {
        return res.status(401).json({ message: "Invalid password" })
      }

      jwt.sign(
        { userID: foundUser._id, username },
        jwtSecret,
        {},
        (err, token) => {
          if (err) {
            return res.status(500).json({ message: "Error creating token" })
          }

          res.cookie("token", token, { sameSite: "none", secure: true }).json({
            id: foundUser._id,
          })
        }
      )
    } catch (err) {
      res.status(500).json({ message: "Error" })
    }
  } else {
    res.status(400).json({ message: "Both username and password are required" })
  }
}

//Login/Create open user without password for support chat use as a regular client.
const loginOpenUser = async (req, res) => {
  const { username } = req.body
  try {
    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" })
    }
    const createOpenUser = await User.create({
      username: username,
    })
    jwt.sign(
      { userID: createOpenUser._id, username },
      jwtSecret,
      {},
      (err, token) => {
        if (err) {
          return res.status(500).json({ message: "Error creating token" })
        }

        res
          .cookie("token", token, { sameSite: "none", secure: true })
          .status(201)
          .json({
            id: createOpenUser._id,
          })
      }
    )
  } catch (err) {
    res.status(500).json({ message: "Error creating user" })
  }
}

const logoutUser = (req, res) => {
  res.cookie("token", "", { sameSite: "none", secure: true }).json("ok")
}

module.exports = {
  loginUser,
  loginOpenUser,
  registerUser,
  logoutUser,
}
