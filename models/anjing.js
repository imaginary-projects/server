const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnjingSchema = new Schema({
    name : {
        type : String
    },
    type : {
        type : String
    },
    description : {
        type : String
    },
    age : {
        type : String
    },
    price : {
        type : Number
    },
    sex : {
        type : String
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    image_url : {
        type : String
    }
})

const Anjing = mongoose.model('Anjing', AnjingSchema)

module.exports = Anjing;

