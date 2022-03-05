const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const lineReply = require('discord-reply')
const botconfig = require("/home/runner/Rebot/config.json");

module.exports = {
  name: "hug",
  alias: ["abrazo", "abrazar"],

async execute (client, message, args){

  let thumb = ["https://i.pinimg.com/originals/6a/9f/b4/6a9fb48ce68540fb60a6f38b1ece50dd.gif",
  "https://2.bp.blogspot.com/-gEw1xKD6Qho/WxM4EExcosI/AAAAAAABGIM/6nCsx_Iuo-YzT_MNxuqoDKOVAoCayIL6wCLcBGAs/s640/abrazo%2Bamor%2B%2Be.gif",
  "https://media1.tenor.com/images/022a19f8ad9260b5045e16289e66c903/tenor.gif?itemid=7484223",
  "https://media.tenor.com/images/bc8e962e6888249486a3e103edd30dd9/tenor.gif",
  "https://weloversize.com/wp-content/uploads/2018/12/tumblr_nyu20sOjpC1sq9gnbo1_400.gif",
  "https://img.wattpad.com/2925a3c80644c216a935cc6249d31724f4b0cc6d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f596d524e3333715a6935395048673d3d2d3832323235373030352e313565356437626631313537396133323935353039353339343431382e676966",
  "https://i.gifer.com/V8eE.gif",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvNkIskZNXhWUAOvj1cupmGEl0i7B4Ps3Yg9amEpfOoCIU8ZqGCIikA8DqsvPtGijCpw&usqp=CAU"]
  
var enlace = thumb[Math.floor(Math.random() * thumb.length)]
if(!message.mentions.users.first()) {
  message.lineReply(new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription('Debes mencionar a un usuario').setColor('ORANGE'))
} else {

  let userm = message.mentions.users.first()

  const embed = new MessageEmbed()
  .setDescription("**" + message.author.username + "**" + "Le dio un abrazo a " + "**" + userm.username + "**")
  .setColor('RANDOM')
  .setImage(enlace)
  message.channel.send({embed});
}

 }}