const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const lineReply = require('discord-reply')
const botconfig = require("/home/runner/Rebot/config.json");
const star = require('star-labs');

module.exports = {
  name: "dace",
  alias: ["bailar"],
async execute (client, message, args){

  const user = message.author

  const embed = new MessageEmbed()
  .setTitle(`${user.tag} Esta bailando! uWu`)
  .setColor("RANDOM")
  .setImage(star.dance())
    .setTimestamp();
  message.channel.send(embed)

 }}