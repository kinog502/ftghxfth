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
var allcmds = "";
client.commands.forEach(cmd => {
let cmdinfo = cmd.info
allcmds+="``"+client.config.prefix+cmdinfo.name+" "+cmdinfo.usage+"`` ~ "+cmdinfo.description+"\n"
})
var permissions = 37080128;
        let embed = new MessageEmbed()
        .setAuthor(`${client.user.username}`, client.user.avatarURL())
        .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
        .setColor("BLUE")
        .setDescription(`${client.user.username} is the easiest way to play music in your Discord server. Its Supported YouTube, Soundcloud and more!

To get started, join a voice channel and ${prefix1}play a song. You can use song names, video links, and playlist links.

`)
        .addField("Commands",`A full list of commands is available by \`${prefix1}commands\``)
        .addField("Permium",`${client.user.username} Premium gives you access to cool features, like volume control, 24/7 mode, audio effects, and saved queues.`)
        .addField("Add to Discord", `${client.user.username} can be added to as many servers as you want! [Click here to add it to yours.](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
        .addField("Support", `[Click here](${client.config.support}) to talk to our support team if you're having trouble or have any questions.`)
        .setFooter(`To get info of each command you can do ${prefix1}help [command]`)

        if(!args[0])return message.channel.send(embed)
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
