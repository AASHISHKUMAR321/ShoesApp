const mongoose = require('mongoose');


const Connect = ()=>{

        return mongoose.connect("mongodb+srv://aashish:aashish123@cluster0.6sdgsmx.mongodb.net/Ecommerce")
}

module.exports = Connect;