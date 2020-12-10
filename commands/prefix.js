module.exports = {
info: {
name: "prefix",
description: "Change prefix in your prefix",
usage: "<New Prefix>",
aliases: ["setprefix"],
},
run: async function (client, jamel, args) {
const { Database } = require("quickmongo");
const db = new Database(client.config.MongoDB)
const Discord = require("discord.js")
var args = jamel.content.split(" ");
let prefix = await db.get(`newprefix_${jamel.guild.id}`);
if(prefix === null ) prefix = client.config.prefix;
if(!jamel.guild.member(jamel.author).hasPermission("ADMINISTRATOR")) return jamel.channel.send(new Discord.MessageEmbed().setColor("#cf1919").setDescription("You must have adminstrator permission"))
if (!args[1])
return jamel.channel.send(new Discord.MessageEmbed().setDescription(`The Prefix is \`${prefix}\``).setColor("#cf1919"))

await db.set(`newprefix_${jamel.guild.id}`, args[1])
jamel.channel.send(new Discord.MessageEmbed().setDescription(`The prefix has been set to \`${args[1]}\``).setColor("GRREN"))

}}