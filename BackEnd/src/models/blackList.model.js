const mongoose = require("mongoose")

const blackListedTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        unique:true
    }

},{timestamps:true}) 

const blackListedModel = mongoose.model("Blacklisted_Tokens",blackListedTokenSchema)

module.exports = blackListedModel