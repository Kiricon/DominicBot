var Discord= require('discord.io');
var chan = require('./4chan.js');
var https = require('https');
var bot = new Discord.Client({
    autorun: true,
    token: "MTY5MDk3NjgzMTE2NjIxODI0.Ce6asA.GI7Y-zPV3d7MwSuZhjL4puhqu6A"
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }else if(message == 'ching'){
      bot.sendMessage({
        to: channelID,
        message: "chong"
      });
    }else if(message == 'meme me'){
      bot.sendMessage({
        to: channelID,
        message: "https://scontent.xx.fbcdn.net/v/t1.0-0/s480x480/12985361_218290188539737_3910792977386653115_n.jpg?oh=d1a9106784f0d2615b2a2b56948afc39&oe=5783DDEA"
      });
    }else if(message == '!intro'){
      bot.sendMessage({
        to: channelID,
        message: "Nice to meet you all. I am MemeMachine. I need meme's to survive. Here is a little bit about me!"
      });
      bot.sendMessage({
        to: channelID,
        message: "https://www.youtube.com/watch?v=jPiUN8fb3Og"
      });
    }else if(message == "!music"){
      bot.sendMessage({
        to: channelID,
        message: "https://www.youtube.com/watch?v=BdAUvAXCUW8&nohtml5=False"
      });
    }else if(message == "!meme"){
      chan.getMeme(function(response, ext){
    /*    bot.sendMessage({
          to: channelID,
          message: response
        }); */
        https.get(response, function(res) {
            var data = [];

            res.on('data', function(chunk) {
                data.push(chunk);
            }).on('end', function() {
                //at this point data is an array of Buffers
                //so Buffer.concat() can make us a new Buffer
                //of all of them together
                var buffer = Buffer.concat(data);
                bot.uploadFile({
                    to: channelID,
                    file: buffer,
                    filename: "dankmeme"+ext //File will be uploaded to Discord as 'fillCIRCLE.png'
                  //  message: "This is my uploaded file"
                });

                //console.log(buffer.toString('base64'));
            });
        });
      });
    }
});
