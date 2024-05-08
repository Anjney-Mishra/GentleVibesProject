const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = express.Router()

//register
router.post("/register",async(req,res)=>{
    try {
        const {username,email,password,phone,country,state,city}=req.body;

        const existUser = await User.findOne({email})
        if(existUser)
        {
            return res.status(400).json({error:"Email Already Exist"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = bcrypt.hashSync(password,salt)
        const newUser = await User({username,email,password:hashedPassword,phone,country,state,city,level:0})
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post("/login",async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).json({error:"Email Not Found"})
        }
        const matched = await bcrypt.compare(req.body.password,user.password)
        if(!matched){
            return res.status(400).json({error:"Wrong Credentials!"})
        }
        const token = jwt.sign({
            _id:user._id,
            username:user.username,
            email:user.email,
            phone:user.phone,
            country:user.country,
            state:user.state,
            city:user.city,
            level:user.level,
            testgiven:user.testgiven
        },process.env.SECRET,{expiresIn:"3d"})
        const {password,...info}=user._doc
        res.cookie("token",token,{secure:"true",sameSite:"None"}).status(200).json(info)
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.get("/refetch",(req,res)=>{
    const token = req.cookies.token
    jwt.verify(token,process.env.SECRET,{},async (err,data)=>{
        if(err){
            return res.status(400).json(err)
        }
        res.status(200).json(data)
    })
})

router.get("/logout",async(req,res)=>{
    try {
        res.clearCookie("token",{sameSite:"none",secure:true}).status(200).send("User LoggedOut Successfully")
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})


module.exports=router