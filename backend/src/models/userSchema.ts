export {}
const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  id: { type: String },
  name: { type: String },
  photoUrl: { type: String },
  bio: { type: String },
  favourites: [{ type: Schema.Types.ObjectId, ref: 'games' }],
  events: [{ type: Schema.Types.ObjectId, ref: 'events' }]
})

module.exports = model('Users', userSchema)
