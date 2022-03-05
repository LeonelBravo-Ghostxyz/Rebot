const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const lineReply = require('discord-reply')
const botconfig = require("/home/runner/Rebot/config.json");

module.exports = {
  name: "gdtag",
  alias: ["gd"], /* Quita las comillas si no tiene alias */
async execute (client, message, args){
  
message.delete()
    
let char = ["gatekeeper", "gatekeeper.dark", "keymaster", "keymaster.huh", "keymaster.scared", "keymaster.scream", "monster", "monster.eyes", "potbor", "potbor.annoyed", "potbor.huh", "potbor.mad", "potbor.right", "potbor.talk", "potbor.tired", "scratch", "scratch.annoyed", "scratch.huh", "scratch.mad", "scratch.right", "scratch.talk", "shopkeeper", "shopkeeper.annoyed", "spooky"] // posibles imagenes

let color = ["blue", "brown", "purple", "aqua", "green", "grey", "orange", "pink", "red"] // colores disponibles
    
let captura = char[Math.floor(char.length * Math.random())];  
let colorize = color[Math.floor(color.length * Math.random())];

let autor = message.author;
    
let txt = args.join('%20');
    
if (!txt) return message.channel.send("Olvidaste colocar los argumentos.")
  const avatar = await autor.avatarURL({format: 'png'})
    
let img = `https://gdcolon.com/tools/gdtextbox/img/${txt}?color=blue&name=${autor.username}&url=${avatar}`
  const att = new MessageAttachment(`${img}`)

message.channel.send(att)
  
}}