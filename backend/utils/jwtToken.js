const jwt = require("jsonwebtoken")

const sendToken = (user, statusCode, res) => {

    const token = jwt.sign({
        id: user.id,
        email:user.email,
        name:user.name
    }, process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.JWT_EXPIRES })
    const options = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 + 1000),
        httpOnly: true
    }
    res.status(statusCode).cookie("token", token,options,).json(
        {
            user: {
                id: user.id,
                email: user.email,
                avatar: user.avatar,
                name: user.name
            },
            token,
        })
}
module.exports = sendToken