const express = require("express")
const router = express.Router()
const auth = require("../middleware/authMiddleware")
/**
 * @route GET /api/profile
 * @desc Profile endpoint
 * @access Private
 */

router.get("/", auth, (req, res) => {
    res.send(req.decodedUser)
})

module.exports = router