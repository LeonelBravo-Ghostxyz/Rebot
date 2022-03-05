const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const lineReply = require('discord-reply')
const botconfig = require("/home/runner/Rebot/config.json");

module.exports = {
  name: "hi",
  alias: ["saludo", "saludar"],

async execute (client, message, args){

  let thumb = ["https://nekocdn.com/images/uVmQe2X9Y.gif",
  "https://nekocdn.com/images/xOQV01fv9.gif",
  "https://nekocdn.com/images/H3qi0WAw.gif",
  "https://nekocdn.com/images/3JNSfvk-.gif",
  "https://nekocdn.com/images/UwbYgNNT.gif",
  "https://nekocdn.com/images/nEXsHPyN.gif",
  "https://nekocdn.com/images/P-6ml_bA.gif",
  "https://nekocdn.com/images/M6B4wNoP.gif",
  "https://nekocdn.com/images/0JFPkxFu.gif",
  "https://nekocdn.com/images/ZuxDLtoh.gif",
  "https://nekocdn.com/images/DJd9eY3K.gif",
  "https://nekocdn.com/images/AlAZWSfX.gif",
  "https://nekocdn.com/images/0CkXQKoM.gif"]


  var enlace = thumb[Math.floor(Math.random() * thumb.length)]

  const embed = new MessageEmbed()
  .setDescription("**" + message.author.username + "Esta saludando **")
  .setColor('RANDOM')
  .setImage(enlace)
  message.channel.send(embed);

 }}