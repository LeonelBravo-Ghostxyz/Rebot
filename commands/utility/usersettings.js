const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const lineReply = require('discord-reply')
const botconfig = require("/home/runner/Rebot/config.json");
const mongoose = require('mongoose')
const redes = require('/home/runner/Rebot/schemas/redes-schema.js')
const usuarios = require('/home/runner/Rebot/schemas/usuarios-schema.js')

module.exports = {
  name: "usersettings",
  alias: ["settings"], /* Quita las comillas si no tiene alias */
async execute (client, message, args){

  const opt = args[0]
  const no = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setDescription('Debes darme un valor para cambiar de tu informacion de usuario:\nYoutube - Twitter - Twitch - Bio')
  .setColor('ORANGE')
  
  if(!opt)return message.lineReply(no)
  
  if(opt.toLowerCase() === 'bio'){
    let ndn = args.join(' ').slice(opt.length)
    let udata = await usuarios.findOne({UserID: message.author.id})
    if(!ndn)return message.lineReply('Dime que quieres que añada a tu descripción!')
    if(ndn.length > 140)return message.lineReply('No puedes poner mas de 140 caracteres en tu Biografia')
    if(!udata){
      let newdata = new usuarios({UserID: message.author.id, Bio: ndn})
      await newdata.save()
      message.lineReply('Se ha añadido tu bio a tu información de usuario')
    }else{
      let dtexis = await usuarios.findOneAndUpdate({UserID: message.author.id}, {Bio: ndn})
      message.lineReply('Se ha añadido tu bio a tu información de usuario')
    }
  }
  
  var sec = args[1]
  let data = await redes.findOne({UserID: message.author.id})
  if(!data){
  if(opt.toLowerCase() === 'youtube'){
    if(!sec)return message.lineReply('Dame el link de tu canal de Youtube')
    let newdata = new redes({
      UserID: message.author.id,
      Youtube: sec
    })
    await newdata.save()
    message.lineReply('Exito! tu canal de Youtube será enlazado a tu información de usuario')
  }else if(opt.toLowerCase() === 'twitter'){
    if(!sec)return message.lineReply('Dame el link de tu cuenta de Twitter')
    let newdata = new redes({
      UserID: message.author.id,
      Twitter: sec
    })
    await newdata.save()
    message.lineReply('Exito! tu cuenta de Twitter será enlazado a tu información de usuario')
  }else if(opt.toLowerCase() === 'twitch'){
    if(!sec)return message.lineReply('Dame el link de tu canal de Twitch')
    let newdata = new redes({
      UserID: message.author.id,
      Twitch: sec
    })
    await newdata.save()
    message.lineReply('Exito! tu canal de Twitch será enlazado a tu información de usuario')
    }
  }else{
    if(opt.toLowerCase() === 'youtube'){
    if(!sec)return message.lineReply('Dame el link de tu canal de Youtube')
    let newdata = await redes.findOneAndUpdate({UserID: message.author.id}, {'Youtube': sec})
    await newdata.save()
    message.lineReply('Exito! tu canal de Youtube será enlazado a tu información de usuario')
  }else if(opt.toLowerCase() === 'twitter'){
    if(!sec)return message.lineReply('Dame el link de tu cuenta de Twitter')
    let newdata = await redes.findOneAndUpdate({UserID: message.author.id}, {'Twitter': sec})
    await newdata.save()
    message.lineReply('Exito! tu cuenta de Twitter será enlazado a tu información de usuario')
  }else if(opt.toLowerCase() === 'twitch'){
    if(!sec)return message.lineReply('Dame el link de tu canal de Twitch')
    let newdata = await redes.findOneAndUpdate({UserID: message.author.id}, {'Twitch': sec})
    await newdata.save()
    message.lineReply('Exito! tu canal de Twitch será enlazado a tu información de usuario')
  }
    }
  
}}