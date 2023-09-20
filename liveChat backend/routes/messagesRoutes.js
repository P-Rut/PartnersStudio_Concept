const express = require("express")
const router = express.Router()
const { getMessages } = require("../controllers/messagesController")

router.get("/messages/:userID", getMessages)

module.exports = router
