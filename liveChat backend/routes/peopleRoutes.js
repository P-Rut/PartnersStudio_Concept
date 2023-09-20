const express = require("express")
const router = express.Router()

const { profileData, peopleData } = require("../controllers/peopleController")

router.get("/profile", profileData)
router.get("/people", peopleData)

module.exports = router
