const anjing = require('../models/anjing')

class AnjingController {
    static createAnjing (req,res,next){
        anjing.create({
            name : req.body.name,
            type : req.body.type,
            description: req.body.description,
            age : req.body.age,
            price : req.body.price,
            sex : req.body.sex,
            userId : req.body.loggedUser._id,
            image_url : req.body.file
        })
            .then( data =>{
            res.status(201).json(data)
            })
            .catch(next)
    }

    static updateAnjing(req,res,next){
        let obj = {}
        req.body.name && (obj.name = req.body.name)
        req.body.type && (obj.type = req.body.type)
        req.body.description && (obj.description = req.body.description)
        req.body.age && (obj.age = req.body.age)
        req.body.price && (obj.price = req.body.price)
        req.body.sex && (obj.sex = req.body.sex)
        req.body.loggedUser._id && (obj.userId = req.body.loggedUser._id)
        req.body.file && (obj.image_url = req.body.file)
        anjing.findOneAndUpdate( {_id : req.params.id },obj,{new : true, runValidators : true})
            .then(data =>{
                res.status(200).json(data)
            })
            .catch(next)
    }

    static showAnjing(req,res,next){
        anjing.find()
            .then(data =>{
                res.status(200).json(data)
            })
            .catch(next)
    }

    static detailAnjing(req,res,next){
        anjing.findOne({_id:req.params.id}).populate('userId')
            .then( data =>{
                res.status(200).json(data)
            })
            .catch(next)      
    }

    static deleteAnjing(req,res,next){
        anjing.deleteOne({_id:req.params.id})
            .then( data =>{
                res.status(200).json(data)
            })
            .catch(next)
    }
}

module.exports = AnjingController