const mongoose = require('mongoose')

const modelName = 'Order'

const UserSchema = new mongoose.Schema({
  tgusername: {
    type: String,
    required: true,
  },
  request: {
    type: String,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})

module.exports = mongoose.model(modelName, UserSchema, modelName) // * 1st - model name, 2nd - schema name, 3d - collection name
