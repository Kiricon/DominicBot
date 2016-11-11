

class TrashGames{
  //###### Build out our basics.
  constructor(){
    this.keywords = [0,0,0,0,0];
    this.words = ["game", "games", "good", "like", "play", "played"];
    this.reponses = ["games aren't good", "don't play games"];
  }

  //###Digest the messages and respond appropriatly
  read(message, callback){
    if(this.talkingAboutGames(message)){

      var response = this.buildResponse();
      if(repsonse){
        callback(reponse);
        this.keywords = [0,0,0,0,0];
      }

    }else{
      this.keywords.push(0);
      this.keywords.pop();
    }
    console.log(this.keywords);
  }


  //##### Figure out if those plebs are talking about games.
  talkingAboutGames(message){
    let self = this;


    this.words.forEach(function(value){
      if(message.toLowerCase().indexOf(value) > -1){
        self.keywords.push(value);
        self.keywords.pop();
        return true;
      }
    });

    return false;

  }

  //###### If they are talking about games and we can response then let's do it!
  buildReponse(){
    if(this.keywords.includes("game") || this.keywords.includes("games")){

      if(this.keywords.include("good") || this.keywords.include("like")){
        return this.responses[0];
      }else if(this.keywords.include("play") || this.keywords.include("played")){
        return this.response[1];
      }else{
        return false;
      }
    }else{
      return false;
    }

  }

}



module.exports = TrashGames;
