const { MessageEmbed } = require('discord.js')

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

var p = prefix1
if(!args[0])return message.channel.send(new MessageEmbed().setDescription(`${client.user.username} is the easiest way to play music in your Discord server. It supports YouTube only.`)
.setAuthor(client.user.username, client.user.avatarURL()).addField("Bot",'`ping`, `invite`, `prefix`, `stats`, `about`')
.setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL()).setTimestamp()
 .setColor("GREEN")             
.setThumbnail(client.user.avatarURL())
.addField("Music",'`play`, `pause`, `playlist`, `resume`, `queue`, `lyrics`, `remove`, `skipto`, `afk`, `search`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`')  
.addField("Quick Links",`[Invite](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=3169280&scope=bot) | [Support Server](${client.config.support})`)   
) 
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.channel.send("Unknown Command")
            let commandinfo = new MessageEmbed()
            .setTitle("Command: "+command.info.name+" info")
            .setColor("YELLOW")
            .setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${prefix1}${command.info.name} ${command.info.usage}\`\`
Aliases: ${command.info.aliases.join(", ")}
`)
            message.channel.send(commandinfo)
        }
    }
}
