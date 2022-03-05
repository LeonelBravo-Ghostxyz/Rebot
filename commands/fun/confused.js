const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const lineReply = require('discord-reply')
const botconfig = require("/home/runner/Rebot/config.json");
const star = require('star-labs');

module.exports = {
  name: "confused",
  alias: ["confundido"],
async execute (client, message, args){

  const user = message.author
  let member = message.mentions.users.first()

  const embed = new MessageEmbed()
  .setTitle(`${user.tag} se encuentra confundido!`)
  .setImage(star.confused())
  .setColor("RANDOM")
    .setTimestamp();
  message.channel.send(embed)

 }}