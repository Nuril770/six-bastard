const discord = require('discord.js');
const { client } = require('..');
module.exports = {
            name: 'soundtrack',
            aliases: ['st'],
            category: 'yow',
            description: 'Perintah Memutar Soundtrack Little Nightmares',

execute(message, args) {
    if (!message.member.voice.channel) return message.channel.send('Kamu tidak di VoiceChannel').then(msg => {
          msg.delete({timeout: 20000})
        });

      if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Kamu tidak di VoiceChannel yang sama.').then(msg => {
          msg.delete({timeout: 20000})
        });

     if(!args[0]) {
return message.channel.send({
    embed: {
        color: 'YELLOW',
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        fields: [
            {
                name: 'Daftar Soundtrack',
                value: '1 - **Lure Of The Maw**\n2 - **Parasites**\n3 - **Prison Walls**\n4 - **Hunger pt.1**\n5 - **Lights Out**\n6 - **The Death Waltz**\n7 - **Little Lost Things**\n8 - **Six Theme Pt.1**\n9 - **The Janitor Awaits**\n10 - **The Nomes Nest**\n11 - **Cold Feet**\n12 - **Cornered**\n13 - **Moaning Drone**\n14 - **Hunger pt.2**\n15 - **A Feeling For Meat**\n16 - **New Arrivals**\n17 - **March Of The Guests**\n18 - **The Way Out**\n19 - **Hypnosis**\n20 - **The Lady Circles**\n21 - **Hunger pt.3**\n22 - **Six Theme pt.2**\n23 - **Beneath The Waves**\n24 - **Prison Toys**\n\nGunakan : \`6!soundtrack <nomor soundtrack>\`'
            }
        ],
        footer: {
            text: 'Little Nightmares Soundtrack'
        },
        timestamp: new Date()
    }
})
}
if(args.join(" ").toLowerCase() === '1') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/01-Lure-Of-The-Maw.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **Lure Of The Maw**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
else if(args.join(" ").toLowerCase() === '2') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/02-Parasites.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **Parasites**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
}
}
