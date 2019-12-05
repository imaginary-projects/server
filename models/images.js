const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ImageSchema = new Schema({
    url : {
        type : String,
        required : [true,'please insert url']
    },
    userId : {
        type : Schema.Types.ObjectId
    },
    caption : {
        type : String
    },
    comments : {
        type : String
    },
    likes : [{
        userId : {
            type : Schema.Types.ObjectId
        }
    }]
})

const Image = mongoose.model('Image', ImageSchema)

module.exports = Image