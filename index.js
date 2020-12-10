require("dotenv").config();//Loading .env
const fs = require("fs");
const { Collection, Client } = require("discord.js");

const client = new Client();//Making a discord bot client
client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.queue = new Map()
const { Player } = require("discord-player")
const player = new Player(client)
client.player = player;
client.config = {
  prefix: ".",
  MongoDB: "mongodb://ugrsnmrfptbdsblkneky:s6vdckTet7FtYET55qUp@bjzdgr8stmb8isz-mongodb.services.clever-cloud.com:27017/bjzdgr8stmb8isz",
  Token: "Nzg2NzE5MTE0MDU5MzE3MzI5.X9KfRQ.rGNbKbuBan2-OeMVlFSTSxPMYCo",
  support: "https://discord.gg/tU2HMUH8UR"
  
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

//Logging in to discord
client.login(client.config.Token)
