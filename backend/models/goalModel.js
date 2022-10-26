const { Schema, SchemaTypes, model } = require('mongoose')

const goalSchema = Schema(
  {
    user: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

const goalModel = model('Goal', goalSchema)

module.exports = goalModel
