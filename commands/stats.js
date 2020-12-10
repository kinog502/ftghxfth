const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
const moment = require("moment")
const Eris = require("eris")
const fs = require('fs');
const os = require("os");
const bytesToSize = bytes => {
      const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      if (bytes == 0) return "0 Byte";
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];};
module.exports = {
  info: {
    name: "stats",
    description: "shows stats the bot",
    usage: "[about]",
    aliases: ["bot","botinfo"],
  },

  run: async function (client, message, args) {
  const bot = new Eris(client.config.Token, {
    disableEveryone: true,
    defaultImageSize: 512
});
    return message.channel.send(new MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL()).setThumbnail(client.user.avatarURL())
.setDescripiton(`\`\`\`javascript\n${moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]")}\`\`\``)
  .setThumbnail(client.user.avatarURL)
        .setTitle(`${client.user.username}`+ "Status")
        .addField("Some Information",`
Total Servers: \`${bot.guilds.size}\`
Total Users: \`${bot.users.size}\`
Total Commands: \`${bot.commands.size}\`
RAM Usage: **${bytesToSize(process.memoryUsage().heapUsed)}/${bytesToSize(os.totalmem)}**
Eris.js: **v0.13.3**
Nodejs version: **${process.version}**
Platform: **${os.platform()}**
OS: **${os.platform()} ${os.release()}**
Processor: **${os.cpus()[0].model}**`, true)
        .setColor("GREEN")
        .setTimestamp());                              
                               
}}