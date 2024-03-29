const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const lineReply = require('discord-reply')
const Canvas = require('canvas')

module.exports = {
  name: "love",
  alias: ["ship"],

async execute (client, message, args){

const porcentaje = Math.floor(Math.random()*101)

let descripcion;
let emoji;

if(porcentaje <= 23){
  descripcion = `** ${porcentaje}% |  ** Nisiquiera debieron conocerse, los 2 no son compatibles y son muy diferentes`
  emoji = 'https://images.emojiterra.com/twitter/v13.0/512px/1f645-2640.png'
}

if(porcentaje > 23 && porcentaje <= 47){
  descripcion = `** ${porcentaje}% | ** Podrian ser amigos, pero no veo un futuro mayor entre ellos, tienen algunos gustos similares`
  emoji = 'https://images.emojiterra.com/twitter/v13.0/512px/1f91d.png'
}

if(porcentaje > 47 && porcentaje <= 80){
  descripcion = `** ${porcentaje}% | ** Podrian ser una pareja, los gustos son casi iguales y saben mucho uno del otro`
  emoji = 'https://images.emojiterra.com/twitter/v13.0/512px/1f440.png'
}

if(porcentaje > 80){
  descripcion = `** ${porcentaje}% | ** Serian una exelente pareja, pueden llegar a casarse algun dia, los gustos son iguales y se llevan muy bien`
  emoji = 'https://images.emojiterra.com/twitter/v13.0/512px/1f468-1f469-1f467.png'
}


const avatar1 = message.author.displayAvatarURL({ size: 1024, format: 'png' })
const mencion = message.mentions.users.first()

if(!mencion) return message.lineReply(new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription('Debes mencionar a un usuario').setColor('ORANGE'))

const avatar2 = mencion.displayAvatarURL({ size: 1024, format: 'png' })

const lienzo = Canvas.createCanvas(700, 250)
const ctx = lienzo.getContext('2d')
const img1 = await Canvas.loadImage(avatar1)
const img2 = await Canvas.loadImage(avatar2)
const emoji2 = await Canvas.loadImage(emoji)


ctx.drawImage(img1, 25, 25, 200, 200)

ctx.drawImage(emoji2, 250, 25, 200, 200)

ctx.drawImage(img2, 480, 25, 200, 200)

const attachment = new Discord.MessageAttachment(lienzo.toBuffer(), 'logo.png');
message.channel.send(descripcion, attachment)

 }}