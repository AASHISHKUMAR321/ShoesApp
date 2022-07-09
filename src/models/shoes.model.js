const { default: mongoose } = require("mongoose");


const shoesSchema = new mongoose.Schema({
    image:{type:String},
    desc:{type:String},
    price:{type:Number},
    brand:[]
})

module.exports = mongoose.model("shoes",shoesSchema)