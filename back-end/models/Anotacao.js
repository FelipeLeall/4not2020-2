const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required: true
    }
    
})
module.exports = mongoose.model('Anotacao', esquema, 'anotacao')
