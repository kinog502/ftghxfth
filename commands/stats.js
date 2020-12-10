const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
const fs = require('fs');
module.exports = {
  info: {
    name: "about",
    description: "24/7",
    usage: "[about]",
    aliases: [],
  },
  run: async function (client, message, args) {
    return message.channel.send(new MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL()).setThumbnail(client.user.avatarURL())
)
  }}