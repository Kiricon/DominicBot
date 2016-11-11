

class TrashGames(){
  //###### Build out our basics.
  constructor(){
    this.keywords = [0,0,0,0,0];
    this.words = ["game", "games", "good", "like", "play", "played"];
  }

  //###Digest the messages and respond appropriatly
  function read(message, callback{
    if(talkingAboutGames(message)){





    }else{
      this.keywords.push(0);
      this.keywords.pop();
    }
    console.log(this.keywords);
  }


  //##### Figure out if those plebs are talking about games.
  function talkingAboutGames(message){
    let self = this;


    this.words.forEach(function(value){
      if(message.contains(value)){
        self.keywords.push(value);
        return true;
      }
    });

    return false;

  }

  //###### If they are talking about games and we can response then let's do it!
  function buildReponse(){

  }




}
