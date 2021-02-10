const discord = require('discord.js');
const fs = require('fs');

const client = new discord.Client();
client.commands = new discord.Collection();
module.exports.client = client

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.on('ready', () => {
    console.log('Siap baku dusu')
})

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

const prefix = 's!';
client.on('message', async message => {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'tes') message.reply(`${client.ws.ping}ms`)

    if (!client.commands.has(command)) return;
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
    }
})

client.login('ODA4OTI3MDQzMDg0NjE1Njkw.YCNqBA.pjpcKIfYmSzWRuUsLHo_X2Z1Ax8')