const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const lineReply = require('discord-reply')
const osu = require('node-osu');

module.exports = {
  name: "osu",
  alias: [],
async execute (client, message, args){

const api = new osu.Api(process.env.OSU_API , {
    notFoundAsError: true,
    completeScores: false 
})


  
   let username = args.join("");
  if (!username) return message.lineReply(new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL()).setDescription('Debes darme un nombre de usuario').setColor('ORANGE'))
     
  
api.getUser({u: username}).then(user => {
  
  const em = new Discord.MessageEmbed()
  .setAuthor('Osu Stats', client.user.avatarURL())
  .setDescription("Este es el perfil de **" + user.name + "** en Osu del usuario!")
  .setThumbnail(`http://s.ppy.sh/a/${user.id}`)
  .setColor("BLUE")
  .addField('Nombre', user.name, true)
  .addField('PP', Math.round(user.pp.raw), true)
  .addField('Rank', user.pp.rank, true)
  .addField('Nivel', Math.round(user.level), true)
  .addField('Pais', user.country, true)
  .addField('Ranking De Ciudad', user.pp.countryRank, true)
  .addField('Veces jugadas', user.counts.plays, true)
  .addField('Punteria', `${user.accuracyFormatted}`, true)
.setFooter(message.author.tag, message.author.avatarURL())
.setTimestamp(message.createdAt)
  message.lineReply(em)
  
}).catch(e => message.lineReply('No he encontrado al usuario que buscas'))

 }}