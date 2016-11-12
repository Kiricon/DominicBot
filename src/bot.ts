var Discord = require('discord.io');
import {TrashGames} from "./skills/games"
var https = require('https');

export class DiscordBot{


  bot = "";
  trashgames = new TrashGames();
  chan = require('./skills/4chan.js');

  init():void {
    this.bot = new Discord.Client({
      autorun: true,
      token: "MTY5MDk3NjgzMTE2NjIxODI0.Ce6asA.GI7Y-zPV3d7MwSuZhjL4puhqu6A"
    });
    this.bot.on('ready', function() {
        console.log(this.bot.username + " - (" + this.bot.id + ")");
    });

    this.listen();
  }




  listen():void {
    this.bot.on('message', function(user, userID, channelID, message, rawEvent) {

        this.trashgames.read(message, function(response){
          this.respond(channelID, response);
        });


        if(message == "!music"){
          this.respond(channelID, "https://www.youtube.com/watch?v=BdAUvAXCUW8&nohtml5=False");
        }else if(message == "!meme"){
          this.chan.getMeme(function(response, ext){
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
                    this.bot.uploadFile({
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
  }


  respond(channelID, response){
    this.bot.sendMessage({
      to: channelID,
      message: response
    });
  }



  }
