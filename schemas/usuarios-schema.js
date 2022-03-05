const { Schema, model } = require('mongoose')

const usuarios = new Schema({

  UserID: String,
  
  Bio: String,
  
  Rol: {
    type: String,
    default: 'User',
  }
  
})


module.exports = model("usuarios-schema", usuarios)