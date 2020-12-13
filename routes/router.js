const express = require("express")
const AuthRouter = require("./AuthRouter")
const ProfileRouter = require("./ProfileRouter")
const BookRouter = require("./BookRouter")

const router = express.Router()

// only /api endpoint

/**
 * @route GET /api/auth
 * @desc Auth endpoint
 * @access Public
 */

router.use("/auth", AuthRouter)

/**
 * @route GET /api/profile
 * @desc Profile endpoint
 * @access Private
 */

router.use("/profile", ProfileRouter)

/**
 * @route GET /api/book
 * @desc Book endpoint
 * @access Public
 */

// router.use("/book", BookRouter)



module.exports = router;