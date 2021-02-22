const discord = require('discord.js');
const fs = require('fs');

const client = new discord.Client();
client.commands = new discord.Collection();
module.exports.client = client

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.on('ready', () => {
    console.log('Siap baku dusu')
    client.user.setActivity('Goodbye Mono!😚', { type: 'LISTENING' })
})

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

const prefix = '6!';
client.on('message', async message => {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
    }
    const db = require('quick.db')

if(db.has(`afk-${message.author.id}+${message.guild.id}`)) {
        const info = db.get(`afk-${message.author.id}+${message.guild.id}`)
        await db.delete(`afk-${message.author.id}+${message.guild.id}`)
        message.reply(`Status AFK Kamu Telah Dihapus! (${info})`)
})
client.on('message', async message => {
    if(message.content === '<@!'+`${client.user.id}`+'>') message.channel.send({
        embed: {
            color: 'YELLOW',
            description: `Halo Ngab! Prefix **${client.user.username}** Adalah **\`6!\`**`,
            timestamp: new Date()
        }
    })
})
client.on('message', async message => {
    if(message.content === '<@'+`${client.user.id}`+'>') message.channel.send({
        embed: {
            color: 'YELLOW',
            description: `Halo Ngab! Prefix **${client.user.username}** Adalah **\`6!\`**`,
            timestamp: new Date()
        }
    })
})

client.login('ODA4OTI3MDQzMDg0NjE1Njkw.YCNqBA.VgDAYnhkpcc6_aA2t3XlvldC5YM')//
