const { validationResult } = require('express-validator')
const handleError = require('../utils/errorhandler')
const User = require('../models/user-model')
const path = require('path')
const bcg = require("bcryptjs")
const fs = require('fs')
const jwt = require('jsonwebtoken')
const sendMail = require('../utils/sendMail.js')
const sendToken = require('../utils/jwtToken.js')

module.exports.signup = async function (req, res, next) {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return next(handleError("Invalid input data", 422))
    }
    try {
        const { name, email, password } = req.body
        const usedEmail = await User.findOne({ email: email })
        if (usedEmail) {
            const filename = req.file.filename
            const filepath = path.join(`uploads/${filename}`)
            fs.unlink(filepath, (err) => {
                if (err) {
                    return next(handleError("Error deleting file", 500))

                }
            })
            return next(handleError("User alredy exists", 400))
        }

        const filename = req.file.filename
        const fileUrl = path.join(filename)
        const user = {
            name,
            email,
            password,
            avatar: { url: fileUrl }
        }
        const activationToken = await createActivationToken(user)
        const activationUrl = `http://localhost:3000/activation/${activationToken}`
        await sendMail({
            email: user.email,
            subject: "Activate your account",
            message: `Hello ${user.name} please click on the link to activate you account: ${activationUrl}`
        })
        res.status(201).json({ message: `please check you email:- ${user.email} to activate you account` })

    } catch (error) {
        return next(handleError("Registring user failed, please try again later", 500))
    }


}

async function createActivationToken(user) {
    return await jwt.sign(user, process.env.ACTIVATION_SERCET, {
        expiresIn: '5m'
    })
}
module.exports.activateAccount = async function (req, res, next) {
    try {
        const { activation_token } = req.body

        const newUser = await jwt.verify(activation_token, process.env.ACTIVATION_SERCET)
        if (!newUser) {
            return next(handleError("Invalid activation token", 400))
        }

        const { name, email, password, avatar } = newUser
        const usedEmail = await User.findOne({ email: email })
        if (usedEmail) {
            return next(handleError("User already exisits try to log in instead", 422))
        }
        const hashedPassword = bcg.hashSync(password, 12)
        const createdUser = await User.create({
            name,
            email,
            avatar,
            password: hashedPassword

        })
        sendToken(createdUser.toObject({ getters: true }), 201, res)
    }
    catch (err) {
        return next(handleError("Creating user failed, please try again later", 500))
    }
}

module.exports.signin = async function (req, res, next) {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return next(handleError("Invalid input data", 422))
    }
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email }).select('+password')
        if (!user) {
            return next(handleError("Invalid username or password"), 422)
        }

        const validPassword = await bcg.compare(password, user.password)

        if (!validPassword) {
            return next(handleError("Invalid username or password"), 422)
        }
        sendToken(user.toObject({ getters: true }), 201, res)
    } catch (error) {
        console.log(error)
        return next(handleError("Loggin falied, please try again later", 500))
    }

}

module.exports.getUser = async function (req, res, next) {
    if (!req.user) {
        return next(handleError("Unauthenticated", 401))
    }
    try {
        const user = await User.findById(req, user.id)
        res.status(200).json(user)
    } catch (error) {
        return next(handleError("Gettin user failed please try again", 500))
    }


}
module.exports.logout = async function(req,res,next){
    try {
        res.cookie("token",null,{
            expires: new Date(Date.now()),
            httpOnly:true
        })
        res.status(201).json({message:"Log out SUccessfull!"})
        
    } catch (error) {
        console.log(error)
        return next(handleError("Logging out faliled, please try again"),500)
    }
}