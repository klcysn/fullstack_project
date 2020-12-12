exports.authRegister = (req, res)=>{
    const { firstName, lastName, email, password} = req.body
    console.log(firstName, lastName, email, password)
}

exports.authLogin = (req, res)=>{
    res.send("Login Completed")
}