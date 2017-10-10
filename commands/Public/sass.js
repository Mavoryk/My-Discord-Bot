module.exports = {
    run: function(message){
        var sassify = message.content
        var sassified = ""
        console.log(sassify.length)
        for (i = 0; i < sassify.length; i++){
            var upperlower = Math.round(Math.random())
            if(upperlower == 0){
                sassified = sassified += sassify.charAt(i).toLowerCase()
            } else {
                sassified = sassified += sassify.charAt(i).toUpperCase()
            }
        }
        message.channel.send("*"+sassified+"*")
    }
}