const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const lineReply = require('discord-reply')
const botconfig = require("/home/runner/Rebot/config.json");

module.exports = {
  name: "editsnipe",
  alias: [],
async execute (client, message, args){


  var channel = message.mentions.channels.first() || message.channel

      const msg = client.edites.get(channel.id)
      if(!msg)return message.lineReply(new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(`${botconfig.emojis.no} No se ha editado ningun mensaje recientemente`).setColor('RED'))
      const embed = new Discord.MessageEmbed()

        .setAuthor(`Message Author ${msg.edited.tag}`, msg.edited.displayAvatarURL())
        .addField("Canal", `<#${msg.canal.id}>`)
        .setDescription(`**OLD**: ${msg.content}\n**NEW**: ${msg.newmsg}`)
        .setColor("RED")
    
    message.lineReply(embed)

 }}