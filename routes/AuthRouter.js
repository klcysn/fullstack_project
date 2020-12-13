const express = require("express")
const AuthController = require("../controllers/AuthController")
const { check, validationResult } = require("express-validator")

const router = express.Router()

/**
 * @route POST /api/auth/register
 * @desc Register endpoint
 * @access Public
 */

router.post("/register", [
    check("password", "please enter a password with 6 and more char").isLength({ min: 6 }),
    check("email", "Please enter a valid email").isEmail()
], AuthController.authRegister)

/**
 * @route POST /api/auth/login
 * @desc Login endpoint
 * @access Public
 */

router.post("/login", [
    check("password", "please enter a password with 6 and more char").isLength({ min: 6 }),
    check("email", "Please enter a valid email").isEmail()
], AuthController.authLogin)

module.exports = router;