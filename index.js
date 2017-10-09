const Discord = require('discord.js');
const client = new Discord.Client();
const commands = require('./commands')

client.on('ready', () => {
    console.log("I'm online!");
});

client.on('message', message => {
    if(message.author.bot) return;

    var chance = Math.floor(Math.random()*100)
    console.log(chance);
//    console.log(message.content.toLowerCase());
});
console.log("test")
client.login("")
console.log("test2")