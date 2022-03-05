const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed, Collection, Guild } = require('discord.js');
require('dotenv').config();
const fs = require('fs');
let { readdirSync } = require('fs');
const { type } = require('os');
const { match } = require('assert');
const keepAlive = require('./server.js');
const lineReply = require('discord-reply')
const botconfig = require("/home/runner/Rebot/config.json");
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado correctamente a MongoDB')
}).catch(() => {
  console.log('Ocurrio un error al conectarse a MongoDB')
})

client.snipes = new Discord.Collection();
client.commands = new Discord.Collection();

/* CMD HANDLER */

  const commandFolders = fs.readdirSync('./commands')
  for (const folder of commandFolders){
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for(const file of commandFiles){
      const command = require(`./commands/${folder}/${file}`)
      client.commands.set(command.name, command)
    }
  }
/* SNIPE */
client.on('messageDelete', message => {
	client.snipes.set(message.channel.id, {
		content: message.content,
		delete: message.author,
		canal: message.channel
	});
});
/* EDITSNIPE */
client.edites = new Discord.Collection();

client.on('messageUpdate', (message, newMessage) => {
  client.edites.set(message.channel.id, {
    newmsg: newMessage.content,
    content: message.content,
    edited: message.author,
    canal: message.channel
  })
})

client.on('ready', async () => {
  console.log(`${client.user.tag} Online`)
})

client.on('message', async message => {
  let prefix = `${botconfig.prfx}`
  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
		const embedmention = new Discord.MessageEmbed()
			.setAuthor(message.author.tag, message.author.avatarURL())
			.setDescription('Si necesitas ayuda en el uso de mis comandos puedes utilizar\n\n'+prefix+'help\ny veras la lista de los comandos que tengo')
      .setColor('ORANGE')
      .setThumbnail(client.user.avatarURL())
		message.channel.send(embedmention);
	}

  if(!message.content.startsWith(prefix) ||message.author.bot)return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	let cmd = client.commands.find(c => c.name === command || (c.alias && c.alias.includes(command)));
  if(!cmd){
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription('Ese comando no existe, prueba a utilizar **'+prefix+'help** para ver la lista de comandos')
    .setColor('RED')
    message.channel.send(embed)
  }
	if(cmd) {
		cmd.execute(client, message, args);
	}
})

//24/7
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'https://bxyzsecundario.leonelbravo059.repl.co',
    title: 'secundario',
    interval: 5 // minutes
});

monitor.on('error', (error) => console.log(error));

client.login(process.env.TOKEN)


function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}