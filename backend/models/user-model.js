const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter your name"]
    },
    email:{
        type:String,
        required:[true, "Please enter your email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please enter valid password"],
        minLength:[4,"Password must be atleast 4 characters"],
        select:false
    },
    phoneNumber:{
        type:Number
    },
    addresses:[
        {
            country:{
                type:String
            },
            city:{
                type:String
            },
            address1:{
                type:String
            },
            address2:{
                type:String
            },
            zipCode:{
                type:Number
            },
            addressType:{
                type:String
            }
        }
        
    ],
    role:{
        type:String,
        default:"user"
    },
    avatar:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
            required:true
        }
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    resetPasswordToken: String,
    resetPasswordTime: Date,
})

module.exports = mongoose.model("User", userSchema)