import mongoose from 'mongoose'

const TaskSchema = new Schema({
  name: String,
  description: String,
  active: Boolean,
  color: String,
  duration: { type: Date, default: 0 }
})

module.export = mongoose.model('Task', TaskSchema)
