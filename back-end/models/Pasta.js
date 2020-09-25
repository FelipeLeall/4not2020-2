const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
})
module.exports = mongoose.model('Pasta', esquema, 'pasta')
