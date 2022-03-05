const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const lineReply = require('discord-reply')
const botconfig = require("/home/runner/Rebot/config.json");

module.exports = {
  name: "snipe",
  alias: [],


execute (client, message, args){

  var channel = message.mentions.channels.first() || message.channel

      const msg = client.snipes.get(channel.id)

      if(!msg){
        message.lineReply(new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription(`${botconfig.emojis.no} No se ha editado ningun mensaje recientemente`).setColor('RED'))
      } else {
        const embed = new Discord.MessageEmbed()

        .setTitle('Message Sniped')
        .setAuthor(`Message Author ${msg.delete.tag}`, msg.delete.displayAvatarURL())
        .addField("channel", `<#${msg.canal.id}>`)
        .setDescription(msg.content)
        .setColor("RED")

        message.lineReply(embed)
      }

 }

} 