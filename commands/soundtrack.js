const discord = require('discord.js');
const { client } = require('..');
module.exports = {
            name: 'soundtrack',
            aliases: ['st'],
            category: 'yow',
            description: 'Perintah Memutar Soundtrack Little Nightmares',

execute(message, args) {
    let autor = message.user.username
    
    if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 24) return message.channel.send(`**${autor}**, Mohon Masukkan Nomor Soundtrack Yang Benar Antara 1 - 24 `)            

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
}
if(args.join(" ").toLowerCase() === '2') {
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
if(args.join(" ").toLowerCase() === '3') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/03-Prison-Walls.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **Prison Walls**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '4') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/04-Hunger-I.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **Hunger Part.1**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '5') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/05-Lights-Out.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **Lights Out**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '6') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/06-The-Death-Waltz.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **The Death Waltz**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '7') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/07-Little-Lost-Things.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **Little Lost Things**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '8') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/08-Six-Theme-Part-I.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **Six Theme Part.1**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '9') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/09-The-Janitor-Awaits.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **The Janitor Awaits**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '10') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/10-The-Nomes-Nest.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **The Nomes Nest**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '11') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/11-Cold-Feet.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **Cold Feet**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '12') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/12-Cornered.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **Cornered**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '13') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/13-Moaning-Drone.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **Moaning Drone**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '14') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/14-Hunger-II.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **Hungry Part.2**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '15') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/15-A-Feeling-For-Meat.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **A Feeling For Meat**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '16') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/16-New-Arrivals.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **New Arrivals**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '17') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/17-March-Of-The-Guests.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **March Of The Guests**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '18') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/18-The-Way-Out.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **The Way Out**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '19') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/19-Hypnosis.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **Hypnosis**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '20') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/20-The-Lady-Circles.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **The Lady Circles**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '21') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/21-Hunger-III.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **Hungry Part.3**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '22') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/22-Six-Theme-Part-II.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **Six Theme Part.2**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '23') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/23-Beneath-The-Waves.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **Beneath The Waves**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
if(args.join(" ").toLowerCase() === '24') {
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("./soundtrack/24-Prison-Toys.mp3").on("finish", () => VoiceConnection.disconnect({ timeout: 100000 }));
        message.react('👌')
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: {
                    name: 'Memutar Soundtrack'
                },
                description: 'Little Nightmares Soundtrack **Prison Toys**',
                footer: {
                    text: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                timestamp: new Date()
            }
        })
    }).catch(e => console.log(e))
}
}//
}
