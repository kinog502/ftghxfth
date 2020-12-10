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
      return message.channel.send(new require("discord.js").MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("RANDOM")
        .setTitle("الاوامر / prefix   =  "+`${prefix1}`)
        .setDescription(`
▬▬▬▬▬▬▬▬▬≧ (ᵔᴥᵔ) 
\`أوامر الموسيقى  \`  :notes:
\`oPlay  \`  = تشغيل الاغنية او اضافتها للقائمة او اكمال الاغنية [p]
\`oPause \`  = ايقاف مؤقت الاغنية
\`oResume  \`  =  اكمال الاغنية 
\`ostop \`  = لأيقاف الأغنية وخروج البوت من الروم
\`oforceskip \`  = لتخطي الأغنية بشكل مباشر
\`oQueue  \`  = عرض القائمة 
\`oskipto  \`  = لتخطي الأغنية الى الأغنية القادمة في طابور الموسيقى القادمة
\`oSkip  \`  = تخطي للاغنية التالية 
\`oVolume \`  =  تغيير الصوت [vol] 
\`onp  \`  = عرض مايتم تشغيله الان [np] 
\`orepeat \`  = تكرار الاغنية
▬▬▬▬▬▬▬▬▬≧ (ᵔᴥᵔ) 
        `)
        .setFooter("ORZ BOT")
.setImage("https://cdn.discordapp.com/attachments/737574424772870185/768562268375089172/647647647.png")
      var allcmds = "";

        client.commands.forEach(cmd => {
            let cmdinfo = cmd.info
            allcmds+="``"+client.config.prefix+cmdinfo.name+" "+cmdinfo.usage+"`` ~ "+cmdinfo.description+"\n"
        })

        let embed = new MessageEmbed()
        .setAuthor("Commands of "+client.user.username)
        .setColor("BLUE")
        .setDescription(`${client.user.username} is the easiest way to play music in your Discord server. Its Supported YouTube, Soundcloud and more!

To get started, join a voice channel and ${prefix1}play a song. You can use song names, video links, and playlist links.

`)
        //.setDescription(allcmds)
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
