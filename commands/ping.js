const client = require('../index.js').client
module.exports = {
    name: 'ping',
    aliases: ['pong'],

execute(message, args) {
    message.channel.send({
        embed: {
        color: 'YELLOW',
        description: `Pong: \`${client.ws.ping}ms\``
    }})
}
}