const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const lineReply = require('discord-reply')
const botconfig = require("/home/runner/Rebot/config.json");

module.exports = {
  name: "punch",
  alias: ["golpear"],
async execute (client, message, args){

  let thumb = ["https://media.giphy.com/media/YrfARBZkReL8Q/giphy.gif", 
"https://media.giphy.com/media/qPzZQtsv21zjy/giphy.gif", 
"https://media.giphy.com/media/DuVRadBbaX6A8/giphy.gif",
"https://media.giphy.com/media/mZxdBUPdsJYn6/giphy.gif",
"https://media.giphy.com/media/hzx9toaSQPHRm/giphy.gif",
"https://media.giphy.com/media/ExgYLDxhtdyec/giphy.gif",
"https://media.giphy.com/media/CeDZGQE0qWjkc/giphy.gif",
"https://media.giphy.com/media/1Bgr0VaRnx3pCZbaJa/giphy.gif",
"https://media.giphy.com/media/Z5zuypybI5dYc/giphy.gif",
"https://media.giphy.com/media/l3JDisfVJFuQWGq7m/giphy.gif",
"https://media.giphy.com/media/3ohc1292yKn6Z1saGs/giphy.gif",
"https://media.giphy.com/media/upT3Tbwupcbok/giphy.gif"]

var enlace = thumb[Math.floor(Math.random() * thumb.length)]
if(!message.mentions.users.first()) {
  const embed = new MessageEmbed()
  message.lineReply(new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription('Debes mencionar a un usuario').setColor('ORANGE'))
} else {

  let userm = message.mentions.users.first()

  const embed = new MessageEmbed()
  .setDescription("**" + message.author.username + "**" + "Golpeo a " + "**" + userm.username + "**")
  .setColor('RANDOM')
  .setImage(enlace)
  message.channel.send({embed});
}

 }}