const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

const config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));

client.on('ready', () => {
    console.log("I'm online!");
});

client.on('message', message => {
    if(message.author.bot) return;

    var chance = Math.floor(Math.random()*100)
    console.log(chance);
//    console.log(message.content.toLowerCase());
});

client.login(config.token)
