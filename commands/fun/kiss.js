const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const lineReply = require('discord-reply')
const botconfig = require("/home/runner/Rebot/config.json");
const clientN = require('nekos.life')
const neko = new clientN()

module.exports = {
  name: "kiss",
  alias: ["besar"], /* Quita las comillas si no tiene alias */
async execute (client, message, args){

  let mention = message.mentions.members.first()
  if(!mention) return message.lineReply(new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription('Debes mencionar a un usuario').setColor('ORANGE'))

  neko.sfw.kiss().then(neko => {
    const embed = new MessageEmbed()
    .setColor('PURPLE')
    .setTitle(`${message.member.displayName} Beso a ${mention.displayName} :3`)
    .setImage(neko.url)
    message.channel.send(embed)
  })

 }}