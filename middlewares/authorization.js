const Anjing = require('../models/anjing')

module.exports = (req,res,next)=>{
    Anjing.findOne({_id:req.params.id})
    .then(anjing => {
        if(anjing.userId == req.loggedUser.id){
            next()
        }else{
            next({
                status : 401,
                message : 'unauthorized user'
            })
        }
    }) 
    .catch(err => {
        next(err)
    })
}