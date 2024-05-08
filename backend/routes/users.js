const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')

const router = express.Router()

//get user by id
router.get("/:id",async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        const {password,...info} = user._doc
        res.status(200).json(info)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports=router