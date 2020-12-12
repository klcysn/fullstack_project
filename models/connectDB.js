const mongoose = require("mongoose")

const connectDB =async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("DB connected successfully")
    } catch(error){
        console.log("Error connecting DB", error)
    }
}

module.exports = connectDB
