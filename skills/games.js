

class TrashGames{
  //###### Build out our basics.
  constructor(){
    this.keywords = [0,0,0,0,0];
    this.words = ["game", "games", "good", "like", "play", "played"];
    this.responses = ["games aren't good", "don't play games"];
  }

  //###Digest the messages and respond appropriatly
  read(message, callback){
    if(this.talkingAboutGames(message)){

      var response = this.buildResponse();
      if(response != false){
        callback(response);
        this.keywords = [0,0,0,0,0];
      }

    }else{
      this.keywords.push(0);
      this.keywords.shift();
    }
    console.log(this.keywords);
  }


  //##### Figure out if those plebs are talking about games.
  talkingAboutGames(message){
    let self = this;
    let bool = false;

    for(var i = 0; i < this.words.length; i++){
      let value = this.words[i];
      if(message.toLowerCase().indexOf(value) > -1){
        self.keywords.push(value);
        self.keywords.shift();
        bool = true;
        i = this.words.length;
      }
    }

    return bool;

  }

  //###### If they are talking about games and we can response then let's do it!
  buildResponse(){
    if(this.keywords.includes("game") || this.keywords.includes("games")){

      if(this.keywords.includes("good") || this.keywords.includes("like")){
        return this.responses[0];
      }else if(this.keywords.includes("play") || this.keywords.includes("played")){
        return this.responses[1];
      }else{
        return false;
      }
    }else{
      return false;
    }

  }

}



module.exports = TrashGames;
