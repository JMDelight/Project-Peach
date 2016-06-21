/*############################################
          ROOM DEFINITIONS
  -- All rooms should be created in this file
##############################################*/


// tileDict and entityDict
//   -- These objects associate a string character with an animation object or other entity object, respectively.
//        to add additional tiles, add a key:animation pair to tileDict
//        to add additional entites, add another else-if block to the 'get' function which will return a new
//        instance of the object given its key
var tileDict = {
  "a": new Animation("img/test-image.jpg",0,0,32,32,1,10),
  "b": new Animation("img/test-image.jpg",0,32,32,32,1,10),
  "c": new Animation("img/test-image.jpg",0,64,32,32,1,10),
  "~": new Animation("img/test-image.jpg",0,100,16,16,1,10),
  "#": new Animation("img/test-image.jpg",40,32,16,16,1,10),
  "q": new Animation("img/test-image.jpg",40,32,16,16,1,10),
  "w": new Animation("img/test-image.jpg",40,32,16,16,1,10)
}
var entityDict = {
  get: function(icon) {
    if(icon==="l") {
      return new LightPuzzle(0,0);
    } else if(icon==="@") {
      return new Sprite(0,0,0);
    } else if(icon==="w") {
      return new Wall(0,0,64,64,"green","solidWall");
    } else if(icon==="x") {
      return new Wall(0,0,64,64,"red","exitDoor");
    } else {
      return "";
    }
  }
}


// -- default height and width of the room in tiles
var roomWidth = 12;
var roomHeight = 12;

// allRooms
//  -- This object contains all the rooms of the game. To add more rooms, add a key:room-object pair to allRooms
var allRooms = {
  "q": new Room(roomWidth, roomHeight),
  "w": new Room(roomWidth, roomHeight),
  "overworld": new Room(23, 15)
}


//In this area, new maps can be created and added to the rooms created above
//  Instructions: Get the desired room from the allRooms object and use the addMap method on it.
//    For additional details see my comments on the addMap method in room.js
allRooms["q"].addMap([
  ["a","a","a","a","a","a","a","a","a","a","a","a"],
  ["a","a","a","a","a","a","a","a","a","a","a","a"],
  ["a","a","a","a","a","a","a","a","a","a","a","a"],
  ["a","a","a","a","a","a","a","a","a","a","a","a"],
  ["b","b","b","b","b","b","b","b","b","b","b","b"],
  ["b","b","b","b","b","b","b","b","b","b","b","b"],
  ["b","b","b","b","b","b","b","b","b","b","b","b"],
  ["b","b","b","b","b","b","b","b","b","b","b","b"],
  ["a","a","a","a","a","a","a","a","a","a","a","a"],
  ["a","a","a","a","a","a","a","a","a","a","a","a"],
  ["a","a","a","a","a","a","a","a","a","a","a","a"],
  ["a","a","a","a","a","a","a","a","a","a","a","a"],
],false);
allRooms["q"].addMap([
  [" "," "," "," "," "," "," "," "," "," "," ","w"],
  [" "," "," "," "," "," "," "," "," ","x"," ","w"],
  [" "," ","l"," ","l"," ","l"," "," "," "," ","w"],
  [" "," "," "," "," "," "," "," "," "," "," ","w"],
  [" "," ","l"," ","l"," ","l"," "," ","@"," ","w"],
  [" "," "," "," "," "," "," "," "," "," "," ","w"],
  [" "," ","l"," ","l"," ","l"," "," "," "," ","w"],
  [" "," "," "," "," "," "," "," "," "," "," ","w"],
  [" "," "," "," "," "," "," "," "," "," "," ","w"],
  [" "," "," "," "," "," "," "," "," "," "," ","w"],
  [" "," "," "," "," "," "," "," "," "," "," ","w"],
  [" "," "," "," "," "," "," "," "," "," "," ","w"],
],true);

allRooms["w"].addMap([
  ["b","b","b","b","b","b","b","b","b","b","b","b"],
  ["b","b","b","b","b","b","b","b","b","b","b","b"],
  ["b","b","b","b","b","b","b","b","b","b","b","b"],
  ["b","b","b","b","b","b","b","b","b","b","b","b"],
  ["a","a","a","a","a","a","a","a","a","a","a","a"],
  ["a","a","a","a","a","a","a","a","a","a","a","a"],
  ["a","a","a","a","a","a","a","a","a","a","a","a"],
  ["a","a","a","a","a","a","a","a","a","a","a","a"],
  ["b","b","b","b","b","b","b","b","b","b","b","b"],
  ["b","b","b","b","b","b","b","b","b","b","b","b"],
  ["b","b","b","b","b","b","b","b","b","b","b","b"],
  ["b","b","b","b","b","b","b","b","b","b","b","b"]
],false);
allRooms["w"].addMap([
  ["l"," ","l"," ","l"," ","l"," ","l"," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "],
  ["l"," ","l"," ","l"," ","l"," ","l"," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "],
  ["l"," ","l"," ","l"," ","l"," ","l"," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "],
  ["l"," ","l"," ","l"," ","l"," ","l"," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "],
  ["l"," ","l"," ","l"," ","l"," ","l"," "," "," "],
  [" "," "," "," "," ","@"," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," ","x"," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "],
],true);

//this code creates the overworld room -- it is special so it needs fancier code
var map = [];
var ow = allRooms["overworld"].width;
var oh = allRooms["overworld"].height;
boatX = Math.floor(ow/2);
boatY = Math.floor(oh/2);
for(var y=0; y<oh; y++) {
  map.push([]);
  for(var x=0; x<ow; x++) {
    map[y].push("~");
  }
}
var placeIslands = function() {
  for(var i=0; i<Math.min(oh,ow)/2; i+=1) {
    for(var y=0+i; y<oh-i; y++) {
      for(var x=0+i; x<ow-i; x++) {
        var rand = Math.random();
        if(rand<.003*i) {
          map[y][x] = "q";
        }
      }
    }
  }
}
placeIslands();
map[boatY][boatX] = "w";
allRooms["overworld"].addMap(map, false);
allRooms["overworld"].addSprite(boat);