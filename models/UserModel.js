const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        registerDate:{
            type: Date,
            default: Date.now
        },
    })


module.exports = User = mongoose.model("user", UserSchema) // user is model name, userSchema is schema name, User is model name