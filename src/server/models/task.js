import mongoose, { Schema } from 'mongoose'

const TaskSchema = new Schema({
  name: String,
  description: String,
  active: Boolean,
  color: String,
  duration: Number,
  status: { type: String, enum:['complete', 'pending']}
})

module.exports = mongoose.model('Task', TaskSchema)
