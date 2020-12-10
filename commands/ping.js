 const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
const fs = require('fs');
module.exports = {
  info: {
    name: "ping",
    description: "shows the ping",
    usage: "[ping]",
    aliases: [],
  },
  run: async function (client, message, args) {
var PinG = `${Date.now() - message.createdTimestamp}`

 var api = message.client.ws.ping;

 if (message.author.bot) return;
 let ping = new MessageEmbed()

 .setColor("#00BFFF")
 .setTitle(`Pong..`);

 message.channel.send(ping).then(function(p) {
 setTimeout(function() {
 p.edit({
  embed: new MessageEmbed()
 .setColor("#00BFFF")
 .setDescription("Api Latence : `"+PinG+" ms.`\nDiscord API :  `"+api+" ms.`")
           .setFooter(`Requested By: ${message.author.tag}`,message.author.avatarURL({dynamic:true}))
   
 });
 }, 500);
 })
  }}