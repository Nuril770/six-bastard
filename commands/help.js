module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'yow',
    utilisation: '{prefix}help',
    description: 'Untuk Melihat Daftar Command Yang Tersedia',
    
execute(message, args) {
  if(!args[0]) {
  const yow = message.client.commands.filter(x => x.category == 'yow').map((x) => '`' + x.name + '`').join(', ');
  
  message.channel.send({
    embed: {
        author: 'Help Page',
        color: 'YELLOW',
        fields: [
          { name : 'Command Yang Tersedia', value: yow }
          ],
         timestamp: new Date()
    }
  })
  }
}
}
