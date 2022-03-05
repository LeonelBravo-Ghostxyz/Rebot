const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const botconfig = require("/home/runner/Rebot/config.json");
const ms = require('ms')
const lineReply = require('discord-reply')
const Duration = require('humanize-duration')
const mongoose = require('mongoose')
const redes = require('/home/runner/Rebot/schemas/redes-schema.js')
const usuarios = require('/home/runner/Rebot/schemas/usuarios-schema.js')

module.exports = {
  name: "userinfo",
  alias: [],

async execute (client, message, args){

  let estados = {
      "online": "En Línea",
      "idle": "Ausente",
      "dnd": "No molestar",
      "offline": "Desconectado / invisible"
    };

  let badges1 = {
        
      'EARLY_SUPPORTER': '<:early_supporter_badge:862111906029895690> Partidario inicial',
      'DISCORD_EMPLOYEE': '<:staff_badge:862111905908654137> Empleado de Discord',
      'DISCORD_PARTNER': '<:new_partner_badge:862111905975500801> Propietario del servidor socio',
      'HYPESQUAD_EVENTS': '<:hypesquad_events_badge:862111906067644436> Eventos del HyperSquad',
      'HOUSE_BRAVERY': '<:hypesquad_bravery_badge:862111905987166238> Bravery del HyperSquad',
      'HOUSE_BRILLIANCE': '<:hypesquad_brilliance_badge:862111905903935509> Brilliance del HyperSquad',
      'BUGHUNTER_LEVEL_1': '<:bug_hunter_badge:862111905840758814> Cazaerrores de Discord',
      'BUGHUNTER_LEVEL_2': '<:bug_buster_badge:862111906012463124> Cazaerrores de Discord',
      'VERIFIED_DEVELOPER': '<:verified_developer_badge:862111905661059134> Desarrollador inicial de bots verificado',
      'HOUSE_BALANCE': '<:hypesquad_balance_badge:862111906022424576> Balance del HyperSquad',
      "VERIFIED_BOT": "<:bot_verified:945778798752837652> Bot Verificado",
    }

const member = message.mentions.members.first() || message.member

  var btw = ''
  var bio = ''
  var rol = ''
  
  let data = await redes.findOne({UserID: member.user.id}).exec()
  let udat = await usuarios.findOne({UserID: member.user.id}).exec()
  if(!udat){
    let newdata = new usuarios({UserID: member.user.id, Bio: `Este usuario no posee descripcion`, Rol: 'User'})
    await newdata.save()
  }
  if(udat.Rol === 'User'){
    rol = 'Usuario'
  }else if(udat.Rol === 'Developer'){
    rol = `Bot Developer ${botconfig.emojis.devb}`
  }else if(udat.Rol === 'Support'){
    rol = `Integrante de Soporte ${botconfig.emojis.suprt}`
  }else if(udat.Rol === 'Vip'){
    rol = `Usuario VIP ${botconfig.emojis.vip}`
  }
  bio = `${udat.Bio}`
  
  if(!data){
    btw = 'No posee ninguna red social'
  }else{
    let dyt = await redes.find({UserID: member.user.id}, "Youtube")
    let dtwt = await redes.find({UserID: member.user.id}, "Twitter")
    let dtws = await redes.find({UserID: member.user.id}, "Twitch")
    let yt = ''
    let twt = ''
    let tws = ''
    if(!dyt){
      yt = ''+botconfig.emojis.yt+' **Youtube:** No posee'
    }else{
      yt = `${botconfig.emojis.yt} **Youtube:** [Youtube](${data.Youtube})`
    }
    if(!dtwt){
      twt = ''+botconfig.emojis.twt+' **Twitter:** No posee'
    }else{
    twt = `${botconfig.emojis.twt} **Twitter:** [Twitter](${data.Twitter})`
    }
    if(!dtws){
      tws = ''+botconfig.emojis.twch+' **Twitch:** No posee'
    }else{
    tws = `${botconfig.emojis.twch} **Twitch:** [Twitch](${data.Twitch})`
  }
    btw = `${yt}\n${twt}\n${tws}`
  }

    function formatDate (template, date) {
      var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
      date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
      return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
        return template.split(specs[i]).join(item)
      }, template)
    }

let creacion = `${Duration(Date.now() - member.user.createdTimestamp, { units: ['y', 'd', 'h'], language: 'es', conjunction: ' y ', serialComma: false, round: true})}`
let union = `${Duration(Date.now() - member.joinedAt, { units: ['y', 'd', 'h'], language: 'es', conjunction: ' y ', serialComma: false, round: true})}`

    const embed = new Discord.MessageEmbed()
        .setAuthor(member.user.username+'#'+member.user.discriminator)
      .setDescription(`${bio}`)
      .addField('Rol:', `${rol}`)
      .addField("ID:", `${member.user.id}` )
      .addField("Estado:", "" + estados[member.user.presence.status] + "")
      .addField("Apodo:", `${member.nickname !== null ? `${member.nickname}` : 'Ninguno'}`, true)
      .addField("Cuenta Creada:", `${formatDate('DD/MM/YYYY, a las HH:mm:ss', member.user.createdAt)} eso fue hace **${creacion}**`)
      .addField("Fecha de Ingreso al Servidor:", `${formatDate('DD/MM/YYYY, a las HH:mm:ss', member.joinedAt)} eso fue hace **${union}**`)
      .addField("Insignias:", member.user.flags.toArray().length ? member.user.flags.toArray().map(badge => badges1[badge]).join(' ') : "No tengo badges")
      .addField("Roles:", member.roles.cache.map(roles => `\`${roles.name}\``).join(', '))
      .addField("Booster:", member.premiumSince ? 'Esta boosteando <a:booster:945784207240724500>' : 'No esta boosteando')
      .addField('Redes sociales:', `${btw}`)
      .setThumbnail (member.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
      .setColor('0x66b3ff')

     message.lineReply(embed)

 }} 