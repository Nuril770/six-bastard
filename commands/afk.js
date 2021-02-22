const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'afk',
  aliases: [],
  category: 'Other',
  
async execute(client, message, args) {
  const content = args.join(" ")
  await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
  const embed = new MessageEmbed()
  .setDescription(`Kamu Sekarang Sedang AFK\n**Alasan :** ${content}`)
  .setColor("BROWN")
  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
    message.channel.send(embed)                
}
}
