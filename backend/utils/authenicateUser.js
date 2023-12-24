const jwt = require('jsonwebtoken')
const handleError = require('./errorhandler')
const User = require('../models/user-model.js')
async function isAuthenticated(req, res, next) {

    let token = req.cookies.token
    if (!token) {
        return next(handleError("Please log in", 401))
    }
    jwt.verify(token.toString(), process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
          
            return next(handleError("Forbidden", 403))
        }

        req.user = user
        next()
    }
    )

}
module.exports = isAuthenticated