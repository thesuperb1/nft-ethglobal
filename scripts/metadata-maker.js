const prompt = require('prompt');
const fs = require('fs');

prompt.start();

prompt.get(['name', 'imageurl', 'description'], function (err, result) {
  if (err) { return onErr(err); }

  console.log(result.name);
  var obj = new Object();
  obj.name = result.name;
  obj.image = result.imageurl;
  obj.description = result.description;
 
  //convert object to json string
  var string = JSON.stringify(obj);

  fs.writeFile("nft-metadata.json", string, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("Your nft-metadata.json was saved in your scripts directory. Now upload it to IPFS or a centralized database like Firebase so you can use it as your token uri!");
});


});

function onErr(err) {
  console.log(err);
  return 1;
}
