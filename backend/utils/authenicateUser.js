const jwt = require('jsonwebtoken')
const handleError= require('./errorhandler')
const User = require('../models/user-model.js')
async function isAuthenticated(req,res,next){
    const {token} = req.cookies
    if(!token){
            return next(handleError("Please log in",401))
    }
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY,(err,user)=>{
        return next(handleError("Forbidden", 403))
    })
    req.user =user
    next()
}
module.exports = isAuthenticated