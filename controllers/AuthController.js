const User = require("../models/UserModel")
const bcrypt = require("bcryptjs")
const {check, validationResult} = require("express-validator")
const jwt = require('jsonwebtoken');


exports.authRegister = async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    const validationErr = validationResult(req)

    if(validationErr?.errors?.length > 0){
        return res.status(400).json({ errors: validationErr.array() })
    }

    User.findOne({ email: email }, (err, user) => {
        if (user) {
            return res.status(400).json({ errors: [{ message: "User has already exists!" }] })
        }
    })

    const salt = bcrypt.genSaltSync(10);
    const newPassword = bcrypt.hashSync(password, salt);

    const user = new User({
        firstName,
        lastName,
        email,
        password: newPassword // crypted password
    })
    await user.save()
    res.send("register completed")
}


exports.authLogin = async (req, res) => {
    const { email, password } = req.body
    let isPasswordMatch = false

    const validationErr = validationResult(req)

    if(validationErr?.errors?.length > 0){
        return res.status(400).json({ errors: validationErr.array() })
    }

    await User.findOne({ email: email }, (err, user) => {
        if (!user) {
            return res.status(400).json({ errors: [{ message: "Invalid credentials" }] })
        }

        isPasswordMatch = bcrypt.compareSync(password, user.password)

        if(!isPasswordMatch){
            return res.status(400).json({ errors: [{ message: "Invalid credentials" }] })
        }

        jwt.sign({user}, process.env.JWT_SECRET_KEY, {expiresIn: 3600}, (err, token)=>{
            if(err){
                return res.status(400).json({ errors: [{ message: "Unknown error" }] })
            }
        })
    })
}