const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const lineReply = require('discord-reply')
const botconfig = require("/home/runner/Rebot/config.json");

module.exports = {
  name: "gay",
  alias: ["homosexual"], 

async execute (client, message, args){

  const user = message.author;

  const userg = message.mentions.members.first() || message.member;

  const embed = new MessageEmbed()

  .setTitle(`porcentaje de homosexualidad`)
  .setThumbnail('https://media.giphy.com/media/audL6763qod9u/giphy.gif')
  .setDescription(`${userg} es %${randomNumber(0, 100)} gay.`)
  .setColor('460741')
  .setFooter(`Solicitado por: ${message.member.displayName}`, user.avatarURL());
  

  message.channel.send(embed)

 }}

 function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}