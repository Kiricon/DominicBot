/// <reference path="./../node.d.ts" />
//delcare function includes(any:any);
"use strict";
class TrashGames {
    constructor() {
        //###### Build out our basics.
        this.keywords = ["", "", "", "", ""];
        this.words = ["game", "games", "good", "like", "play", "played"];
        this.responses = ["games aren't good", "don't play games"];
    }
    //###Digest the messages and respond appropriatly
    read(message, callback) {
        if (this.talkingAboutGames(message)) {
            var response = this.buildResponse();
            if (response != false) {
                callback(response);
                this.keywords = ["", "", "", "", ""];
            }
        }
        else {
            this.keywords.push("");
            this.keywords.shift();
        }
        console.log(this.keywords);
    }
    //##### Figure out if those plebs are talking about games.
    talkingAboutGames(message) {
        let self = this;
        let bool = false;
        let discovered = [];
        for (var i = 0; i < this.words.length; i++) {
            let value = this.words[i];
            if (message.toLowerCase().indexOf(value) > -1) {
                if (discovered.indexOf(value) == -1) {
                    self.keywords.push(value);
                    self.keywords.shift();
                    discovered.push(value);
                    bool = true;
                }
            }
        }
        return bool;
    }
    //###### If they are talking about games and we can response then let's do it!
    buildResponse() {
        if (this.keywords.indexOf("game") > -1 || this.keywords.indexOf("games") > -1) {
            if (this.keywords.indexOf("good") > -1 || this.keywords.indexOf("like") > -1) {
                return this.responses[0];
            }
            else if (this.keywords.indexOf("play") > -1 || this.keywords.indexOf("played") > -1) {
                return this.responses[1];
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}
exports.TrashGames = TrashGames;
