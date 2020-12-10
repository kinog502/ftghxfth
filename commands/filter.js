const { MessageEmbed } = require('discord.js')
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "help",
        description: "To show all commands",
        usage: "[command]",
        aliases: ["commands", "help me", "pls help"]
    },

    run: async function(client, message, args){
const { Database } = require("quickmongo");
const db = new Database(client.config.MongoDB)
let prefix1 = await db.get(`newprefix_${message.guild.id}`);
if(prefix1 === null ) prefix1 = client.config.prefix;
 const channel = message.member.voice.channel
    if (!channel)return sendError("I'm sorry but you need to be in a voice channel to play music!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return sendError("There is nothing playing that I could skip for you.", message.channel);    
   const filter = args[0];
    if (!filter) return message.channel.send(new Discord.MessageEmbed().setColor("#cf1919").setDescription(`Please specify a valid filter to enable or disable ${emotes.error}`));

    const filterToUpdate = Object.values(filters).find((f) => f.toLowerCase() === filter.toLowerCase());

    if (!filterToUpdate) return message.channel.send(new Discord.MessageEmbed().setColor("#cf1919").setDescription(`This filter doesn't exist ${emotes.error}`));

    const filterRealName = Object.keys(filters).find((f) => filters[f] === filterToUpdate);

    const queueFilters = client.player.getQueue(message).filters
    const filtersUpdated = {};
    filtersUpdated[filterRealName] = queueFilters[filterRealName] ? false : true;
    client.player.setFilters(message, filtersUpdated);

    if (filtersUpdated[filterRealName]) message.channel.send(`I'm adding the filter to the music ${emotes.music}`);
    else message.channel.send(new Discord.MessageEmbed().setColor("#cf1919").setDescription(`I'm disabling the filter on the music`));
  
    
    
    
    
}}