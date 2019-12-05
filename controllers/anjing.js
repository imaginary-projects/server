const anjing = require('../models/anjing')

class AnjingController {
    static createAnjing (req,res,next){
        anjing.create({
            name : req.body.name,
            description: req.body.description,
            age : req.body.age,
            price : req.body.sex,
            userId : req.body.loggedUser._id,
            image_url : req.body.file
        })
    }
}

module.exports = AnjingController