const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required: true,
    },
    phone:{
        type:String,
    },
    country:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    level:{
        type:Number,
        default:0,
    },
    testgiven:{
        type:Boolean,
        default:0,
    }
},{timestamps:true})

module.exports=mongoose.model("User",UserSchema)
