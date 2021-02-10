module.exports = {
    name: 'dc',
    category: 'yow',

execute(message, args) {
    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Kamu tidak di VoiceChannel yang sama.').then(msg => {
          msg.delete({timeout: 20000})
        });
    if(!message.member.voice.channel)
    return message.channel.send("Kamu tidak di VoiceChannel.");
    else{
        message.react("👌")
        return message.guild.me.voice.channel.leave();
    }
}
}