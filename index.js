const Discord = require('discord.js');
const client = new Discord.Client();
const logInToken = require("./token.js")

const fs = require("fs");

fs.readdir('./commands/Public', function(err,files){
    if(err){
        console.error(err)
    } else {
        files.forEach(function(file){
            console.log(`${file}`)
        })
    }
})

client.login(logInToken)

client.on('ready', () => {
    console.log("I'm online!");
});

client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.startsWith("http")) return;
    
    var chance = Math.floor(Math.random()*100)
    if(chance > 99 && !message.content.startsWith("!")){
        message.guild.member(client.user).setNickname('Sassbot')
        require(`./commands/Public/sass.js`).run(message)
        message.guild.member(client.user).setNickname('Polybot')
    }
    console.log(chance);
});


