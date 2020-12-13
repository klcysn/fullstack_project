const jwt = require("jsonwebtoken")


const authMiddleware = (req, res, next) => {
    const token = req.header("token")

    if (!token) {
        return res.status(401).json({ msg: "No Token" })
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ msg: "Invalid Token" })
        } else {
            req.decodedUser = decodedToken.user
            next()
        }
    })

}

module.exports = authMiddleware