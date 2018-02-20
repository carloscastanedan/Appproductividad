//Dependencies
import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt-nodejs'

const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  displayName: String,
  password: { type: String, select: false },
  signUpDate: { type: Date, default: Date.now() },
  lastLogin: Date
})

UserSchema.pre('save', function(next){
  let user = this
  if(user.isModified('password'))
  {
    return next()
  }
  bcrypt.genSalt(10, (err, salt) => {
    if(err) return next(err)

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      user.password = hash
      next()
    })
  })
})

module.exports = mongoose.model('User', UserSchema)
