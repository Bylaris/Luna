const Discord = require('discord.js');
let client = new Discord.Client

client.on('ready', () => {
console.log(`Logged In As ${client.user.tag}`)
client.user.setActivity('With Luna-Dev V1')
});

client.login(process.env.DISCORD)
