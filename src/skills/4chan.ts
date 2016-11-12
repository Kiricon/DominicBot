var chan = require('4chanjs');
var random = chan.board('b');
var mod = module.exports; 

mod.getMeme = function(callback){
  var result = "";
random.catalog(function(err, pages){
	// catalog returns all pages from a board
	// but the list of threads only contains the OP
  if(!err && pages){
  var threads = [];
  var memes = [];
  pages.forEach(function(value){
    value.threads.forEach(function(value){
        if (value.com.toLowerCase().indexOf("ylyl") >= 0){
          threads.push(value.no);
        //  console.log(value);
      }
    });
  });

  var track = 0;
  if(threads.length > 0){
  threads.forEach(function(value){
    random.thread(value, function(err, posts){
      track++;
	// this will return an array of posts
      if(!err && posts){
      posts.forEach(function(value){
        if(value.filename && value.ext != ".webm"){
        //  memes.push(value.filename+value.ext);
          var img = random.image(value.tim+value.ext);
          //console.log(img);
          memes.push([img, value.ext]);
        }
      });

      if(track == threads.length){
        var i = getRandomInt(0, memes.length-1);
      //  console.log(memes.length);
        var result = memes[i];
        return callback(result[0], result[1] );
      }

      }
    });
  });
}else{
  return callback("I'm fresh out of them hot memes.");
}
}else{
  result = "You want a fucking joke? You're a fucking joke you mouth breathing plebian. I'm sick of getting your memes, you do it your own dam self. Fuck you!";
  return callback(result);
}

});

}
/*
getMeme(function(response){
  console.log(response);
}); */

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
