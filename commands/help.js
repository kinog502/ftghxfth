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
\`${prefix1}Play  \`  = تشغيل الاغنية او اضافتها للقائمة او اكمال الاغنية [p]
\`${prefix1}Pause \`  = ايقاف مؤقت الاغنية
\`${prefix1}Resume  \`  =  اكمال الاغنية 
\`${prefix1}stop \`  = لأيقاف الأغنية وخروج البوت من الروم
\`${prefix1}forceskip \`  = لتخطي الأغنية بشكل مباشر
\`${prefix1}Queue  \`  = عرض القائمة 
\`${prefix1}skipto  \`  = لتخطي الأغنية الى الأغنية القادمة في طابور الموسيقى القادمة
\`${prefix1}Skip  \`  = تخطي للاغنية التالية 
\`${prefix1}Volume \`  =  تغيير الصوت [vol] 
\`${prefix1}nowplaying  \`  = عرض مايتم تشغيله الان [np] 
\`${prefix1}repeat \`  = تكرار الاغنية
\`${prefix1}afk\` = لجعل البوت ف روم 24 ساعه 
\`${prefix1}lyrics\` = لمعرفه كلمات الاغنيه 
\`${prefix1}playlist\` = لتشغيل قائمه التشغيل 
▬▬▬▬▬▬▬▬▬≧ (ᵔᴥᵔ) 
        `)
        .setFooter("ORZ BOT")
.setImage("https://cdn.discordapp.com/attachments/737574424772870185/768562268375089172/647647647.png"))

    }
}
