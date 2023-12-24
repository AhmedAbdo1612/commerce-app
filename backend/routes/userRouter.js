const {Router} = require('express')
const {upload} = require('../multer.js')
const {check} = require("express-validator")
const  authenicateUser= require('../utils/authenicateUser.js')
const userController = require('../controllers/userController.js')

const router = Router()

router.post('/signup',upload.single('file'),[
    check('email').normalizeEmail().isEmail(),
    check('name').isLength({min:4}),
    check("password").isStrongPassword()
],userController.signup)

router.post('/activation', userController.activateAccount)
router.post('/signin',[
    check('email').normalizeEmail().isEmail(),
    check('password').not().isEmpty()
],userController.signin)
router.get('/getuser', authenicateUser, userController.getUser)
router.get('/logout',authenicateUser,userController.logout)
module.exports = router