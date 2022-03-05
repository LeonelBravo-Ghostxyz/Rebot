const { Schema, model } = require('mongoose')

const redes = new Schema({

  UserID: {
    type: String,
  },
  Youtube: {
    type: String,
  },
  Twitter: {
    type: String,
  },
  Twitch: {
    type: String,
  }
  
})

module.exports = model("redes-schema", redes)