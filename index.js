const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// سيرفر ويب مصغر عشان استضافة Render تفتحه وما تقفل البوت
app.get('/', (req, res) => {
    res.send('Bot is Alive and Running!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// كود البوت الأصلي
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`تم تسجيل الدخول بنجاح باسم ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;
    
    if (message.content === '!مرحباً') {
        message.reply('أهلاً بك! كيف يمكنني مساعدتك اليوم؟');
    }
});

// نقرأ التوكن بأمان من إعدادات الاستضافة
client.login(process.env.TOKEN);