const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { hashPassword } = require('../helpers/passwordGenerator')

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email invalid format'],
        unique: true,
      },
    password : {
        type: String,
        required : [true, 'password is required'],
    }
})

UserSchema.pre('save',function(next){
    this.password = hashPassword(this.password)
    next()
})

UserSchema.path('email').validate(function(value) {
    return User.findOne({ email: value })
      .then(user => {
        if(user) return false
      })
  }, 'Email user is already registered!')
  

const User = mongoose.model('User',UserSchema)

module.exports = User
