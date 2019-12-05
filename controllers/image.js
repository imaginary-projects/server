const Image = require('../models/images')

class ImageController {
    static create(req,res,next){
        Image.create({
            url : req.body.file,
            userId : req.loggedUser._id,
            caption : req.body.caption
        })
        .then( data => {
            res.status(201).json(data)
        })
        .catch( err => {
            next(err)
        })
    }
}

module.exports = ImageController
