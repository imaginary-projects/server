const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnjingSchema = new Schema({
    name : {
        type : String
    },
    jenis : {
        type : String
    },
    age : {
        type : String
    },
    price : {
        type : String
    },
    sex : {
        type : String
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
})