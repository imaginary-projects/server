const anjing = require('../models/anjing')

class AnjingController {

    // JANGAN PAKE createAnjing INI!!!!!!!!!!!!!!!!!!!!!!!
    static createAnjing (req,res,next){
        console.log(req.body)
        const { name, type, description, age, price, sex, userId, image_url } = req.body
        anjing.create({
            name, type, description, age, price, sex, userId, image_url
        })
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(next)
    }
    // JANGAN PAKE createAnjing INI!!!!!!!!!!!!!!!!!!!!!!!


    static filterAnjing(req,res,next)
      {
          const { sex, minPrice, maxPrice } = req.body

          if(sex)
            { query.sex }
          console.log( query )

      }


}

module.exports = AnjingController