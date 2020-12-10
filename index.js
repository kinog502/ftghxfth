require("dotenv").config();//Loading .env
const fs = require("fs");
const { Collection, Client } = require("discord.js");

const client = new Client();//Making a discord bot client
client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.queue = new Map()

client.config = {
  prefix: ".",
  MongoDB: "mongodb://ugrsnmrfptbdsblkneky:s6vdckTet7FtYET55qUp@bjzdgr8stmb8isz-mongodb.services.clever-cloud.com:27017/bjzdgr8stmb8isz",
  Token: "NzY1MzcxNjgzOTUwNTU5MjMz.X4T17Q.-Lbsjn4A7ksD_389y_rSrJY3_1k"
  
}

//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: "+eventName)
  });
});

//Loading Commands
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Command: "+commandName)
  });
});
const Discord = require("discord.js")
let prefix = client.config.prefix
client.on("message", message =>{
if(message.author.bot) return;
if(message.content === prefix + "server"){
let text = message.guild.channels.cache.filter(m => m.type === "text").size;
let voice = message.guild.channels.cache.filter(m => m.type === "voice").size;
let embed = new Discord.MessageEmbed()
.setTitle(message.guild.name)
.setThumbnail(message.guild.iconURL())
.addField('Server ID', message.guild.id, true)
.addField('Owner', `<@${message.guild.ownerID}>`, true)
.addField('Members', message.guild.memberCount, false)
.addField('Channels', `Text: \`${text}\` | Voice: \`${voice}\``, false)
.addField('Roles', message.guild.roles.cache.size, false)
.addField('Emojis**', message.guild.emojis.cache.size, false)
.addField('**Voice Region**', message.guild.region, false)
.addField('Boosts', `${message.guild.premiumSubscriptionCount}`, false)
.setColor('#00ff8e')
      message.channel.send(embed)
}})
//Logging in to discord
client.login(client.config.Token)
