const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const lineReply = require('discord-reply')
const botconfig = require("/home/runner/Rebot/config.json");
const star = require('star-labs');

module.exports = {
  name: "cry",
  alias: ["llorar"],
async execute (client, message, args){

    const aA = message.author
  const aB = new MessageEmbed()
    .setDescription(aA.tag+' ha comenzado a llorar! :(')
    .setImage(star.cry())
    .setColor("RANDOM")
  message.channel.send(aB);

 }}