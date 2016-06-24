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
  "a": new Animation("img/grass1.png",0,0,32,32,1,10),
  "b": new Animation("img/grass1.png",0,0,32,32,1,10),
  "~": new Animation("img/overworld.png",32,0,16,16,2,59),
  "q": new Animation("img/overworld.png",0,0,16,16,2,59),
  "w": new Animation("img/overworld.png",0,0,16,16,2,60),
  "o": new Animation("img/onitile.png",0,0,16,16,2,60),
  "h": new Animation("img/edge-island-corner.png",0,0,32,32,1,10),
  "i": new Animation("img/edge-island-corner.png",32,0,32,32,1,10),
  "d": new Animation("img/edge-island1.png",0,0,32,32,1,10),
  "e": new Animation("img/edge-island1.png",32,0,32,32,1,10),
  "/": new Animation("img/exit-boat1-sm.png",0,0,32,32,1,10),
  "|": new Animation("img/exit-boat1-sm.png",32,0,32,32,1,10),
  "f": new Animation("img/edge-island-corner2.png",0,0,32,32,1,10),
  "g": new Animation("img/edge-island-corner2.png",32,0,32,32,1,10),
  "b": new Animation("img/edge-island2.png",0,0,32,32,1,10),
  "c": new Animation("img/edge-island2.png",32,0,32,32,1,10),
  ">": new Animation("img/exit-boat1-sm2.png",0,0,32,32,1,10),
  "<": new Animation("img/exit-boat1-sm2.png",32,0,32,32,1,10),

  "r": new Animation("img/overworld.png",0,0,16,16,2,59),
  "s": new Animation("img/overworld.png",0,0,16,16,2,59),
  "t": new Animation("img/overworld.png",0,0,16,16,2,59),
  "u": new Animation("img/overworld.png",96,0,16,16,2,59),
  "l": new Animation("img/overworld.png",0,0,16,16,2,59),
  "m": new Animation("img/overworld.png",0,0,16,16,2,59),
  "n": new Animation("img/overworld.png",0,0,16,16,2,59),
  "A": new Animation("img/overworld.png",0,0,16,16,2,59),
  "p": new Animation("img/overworld.png",0,0,16,16,2,59)

}
var entityDict = {
  get: function(icon) {
    if(icon==="l") {
      return new LightPuzzle(0,0);
    } else if(icon==="@") {
      return new Sprite(0,0,0);
    } else if(icon==="w" || icon==="u") {
      return new Wall(0,0,64,96,"green","solidWall");
    } else if(icon==="x") {
      return new Wall(0,0,64,64,"red","exitDoor");
    } else if(icon==="X") {
      return new Wall(0,0,64,64,"red","exitGame");
    } else if(icon==="b") {
      return new Wall(0,0,54,64,"orange","boulder");
    } else if(icon==="p") {
      return new Wall(0,0,50,64,"red","pit");
    } else if(icon==="d") {
      return new Wall(0,0,50,64,"red","completionDoor");
    } else if(icon==="0"||icon==="1"||icon==="2"||icon==="3"||icon==="4") {
      return new Switch();
    } else if(icon==="5"||icon==="6"||icon==="7"||icon==="8"||icon==="9") {
      return new Wall(0,0,64,64,"brown","door");
    } else if(icon==="f") {
      return new Sprite(0,0,batRadius,"#111");
    } else if(icon==="c") {
      return new Sprite(0,0,crabRadius,"#000");
    } else if(icon==="%") {
      return new Switch(function() {
        player.health += 0.5;
        currentRoom.switches.splice(currentRoom.switches.indexOf(this),1);
        currentRoom.sprites.splice(currentRoom.sprites.indexOf(this.sprite),1);
      });
    } else if(icon==="&") {
      return new Switch(function() {
        supplies += 5;
        currentRoom.switches.splice(currentRoom.switches.indexOf(this),1);
        currentRoom.sprites.splice(currentRoom.sprites.indexOf(this.sprite),1);
      });
    } else if(icon==="$") {
      return new Switch(function() {
        money += 1;
        currentRoom.switches.splice(currentRoom.switches.indexOf(this),1);
        currentRoom.sprites.splice(currentRoom.sprites.indexOf(this.sprite),1);
      });
    } else {
      return "";
    }
  }
}


// -- default height and width of the room in tiles
var roomWidth = 18;
var roomHeight = 15;

// allRooms
//  -- This object contains all the rooms of the game. To add more rooms, add a key:room-object pair to allRooms
var allRooms = {
  "A": new Room(roomWidth, roomHeight),
  "q": new Room(roomWidth, roomHeight),
  "r": new Room(roomWidth, roomHeight),
  "s": new Room(roomWidth, roomHeight),
  "t": new Room(roomWidth, roomHeight),
  "u": new Room(roomWidth, roomHeight),
  "l": new Room(roomWidth, roomHeight),
  "m": new Room(roomWidth, roomHeight),
  "n": new Room(roomWidth, roomHeight),
  "p": new Room(roomWidth, roomHeight),
  "overworld": new Room(roomWidth*2, roomHeight*2)


}


//In this area, new maps can be created and added to the rooms created above
//  Instructions: Get the desired room from the allRooms object and use the addMap method on it.
//    For additional details see my comments on the addMap method in room.js
allRooms["A"].addMap([
  ["f","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b",">"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["h","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","i"],
],false);
allRooms["A"].addMap([
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," ","f"," "," "," "," "," ","%"," ","u"," ","x"," "],
  [" ","&"," ","b"," "," "," "," "," "," "," ","%"," "," ","w"," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"," ","&"," "],
  [" "," "," "," "," ","u","u","u","u","u","u","u","u","u","w"," "," "," "],
  [" "," ","p"," "," "," "," "," ","b","p"," "," "," "," ","w"," ","&"," "],
  [" "," "," ","u","u","u","u","u","u"," "," "," "," "," ","w"," "," "," "],
  [" "," "," ","w"," "," "," "," "," "," ","$"," ","$"," ","w"," ","&"," "],
  ["u","u","5","w","u"," "," "," "," "," "," "," "," "," ","w"," "," "," "],
  [" "," "," "," ","w"," "," "," "," "," ","$"," ","$"," ","d"," ","&"," "],
  [" "," "," "," ","w"," ","l"," ","l"," "," "," "," "," ","u"," "," "," "],
  [" "," "," ","0","w"," "," "," "," "," "," "," "," "," ","w"," "," "," "],
  [" ","@"," "," ","w"," ","l"," ","l"," "," "," "," "," ","w"," "," "," "],
  [" "," "," "," ","w"," "," "," "," "," "," "," "," "," ","w"," "," "," "],
  [" "," "," "," ","w","u","u","u","u","u","u","u","u","u","w","u","u"," "],
],true);
allRooms["A"].addSprite(player);

allRooms["q"].addMap([
  ["f","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b",">"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["h","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","i"],
],false);
allRooms["q"].addMap([
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","x"," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","f"," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  ["u","u","u","u","u","u","u","u","u","u","u","u","u","p","u","u","u","u"],
  [" "," "," ","w","0","&"," "," "," "," "," "," "," "," ","w"," "," "," "],
  [" "," "," ","w","u","u","u","p","p","u","u","u","u","5","w"," "," "," "],
  [" "," "," ","w"," "," "," "," "," "," "," "," "," "," ","w"," "," "," "],
  [" "," "," ","w","u","u","u","b","b","b","w","w","w"," ","w"," "," "," "],
  [" "," "," "," "," "," ","&"," "," ","&"," "," "," "," ","w"," "," "," "],
  [" "," "," ","u","u","u","u","u","u","u","u","u","u","u","w"," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" ","@"," "," "," "," "," "," "," "," "," "," "," "," "," ","f"," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" ","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u"," "],
],true);

allRooms["r"].addMap([
  ["f","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","g"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["h","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","/"],
],false);
allRooms["r"].addMap([
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" "," "," ","u","u","u","u","u"," ","c"," "," "," "," "," "," "," "," "],
  [" "," "," ","w"," "," "," ","w"," "," "," "," "," "," "," "," "," "," "],
  [" "," "," ","w"," ","b"," ","w"," "," "," "," "," ","u","u","u","u","u"],
  [" "," "," ","w"," ","u","b","w","u","u","u","u","u","w"," "," "," "," "],
  [" "," "," ","w"," ","w"," "," "," ","p"," "," "," "," "," "," "," "," "],
  [" "," "," ","w"," ","w","b","u","u","u","u","u"," ","u"," ","u"," "," "],
  [" "," "," ","w"," "," "," ","p"," "," "," "," "," ","w"," ","b"," "," "],
  [" "," "," ","w"," "," "," ","u","u"," ","u","u"," "," "," "," "," "," "],
  [" "," "," ","w","u","u","u","w"," ","b"," "," "," ","u","p","u","u","u"],
  [" "," "," "," "," "," ","%"," "," "," ","u","u","u","w","p"," "," "," "],
  [" "," "," "," "," "," "," "," "," "," ","w"," "," "," "," "," "," "," "],
  [" ","@"," "," "," "," "," "," "," "," ","w"," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," ","w"," "," "," "," "," ","x"," "],
  [" ","u","u","u","u","u","u","u","u","u","w","u","u","u","u","u","u"," "],
],true);

allRooms["s"].addMap([
  ["f","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","g"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["h","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","/"],
],false);
allRooms["s"].addMap([
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" "," ","@"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" ","u","u","b","u","u","u","u","u","u","u","u"," "," "," "," "," "," "],
  [" "," ","&","p","%"," "," "," ","b","p"," ","w","u","u","u","u","u","u"],
  [" "," ","u"," ","u","u","b","u","u","u","5","w"," "," "," ","w"," "," "],
  [" "," ","w","$","w","w"," ","w","2"," "," ","6"," ","b"," ","w"," "," "],
  [" ","0","w","%"," ","w"," ","w","u","u","u","u","&","u","&","w"," "," "],
  ["u","u","w"," ","$","w","u","w"," "," "," ","w","%","w"," ","w","u"," "],
  [" "," ","w","b","b","w","1","w","u","u","p","$","$","8"," ","7","3"," "],
  [" "," ","w","p"," ","p"," ","w","w"," ","b","u","u","u","u","u","u"," "],
  [" "," ","w","u","u","u","u","w","w","b","&","b"," ","w"," "," "," "," "],
  [" "," "," ","$"," "," "," "," ","w","p","p","&","$","w"," "," "," "," "],
  [" "," "," "," "," "," "," "," ","w","u","4","u","u","w"," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," ","p","9"," "," "," "," ","x"," "],
  [" ","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u"," "],
],true);

allRooms["t"].addMap([
  ["f","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","g"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["h","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","i"],
],false);
allRooms["t"].addMap([
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" "," ","@"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" "," ","u","u","u","u","u","u"," ","u","u","u","u","u","u"," "," "," "],
  [" "," ","w"," "," ","w"," "," "," "," "," "," ","w","0","w"," "," "," "],
  [" "," ","w"," "," ","p"," ","b","b","b","b"," ","w"," ","w"," "," "," "],
  [" "," ","w"," "," ","p"," "," ","b"," ","b"," ","w"," ","w"," "," "," "],
  [" "," ","w"," "," ","u"," "," "," "," "," "," ","p"," ","w"," "," "," "],
  [" "," ","w"," "," ","w","u","6","u","5","u","u","u","u","w","u","u"," "],
  [" "," ","w"," "," "," ","w"," ","w"," "," "," ","1","w"," "," "," "," "],
  [" "," ","w"," "," "," "," ","p","w","u","u","u","u","w"," "," "," "," "],
  [" "," ","w","u","u","u","u","p","w","f","$","f","$","w"," "," "," "," "],
  [" "," "," "," ","w","c","7"," ","7","$","%","$","%","w"," "," "," "," "],
  [" "," "," "," ","w","u","u","2","u","u","u","u","u","w"," "," "," "," "],
  [" "," "," "," "," "," ","w","m","7"," "," "," "," "," "," "," ","x"," "],
  [" ","u","u","u","u","u","w","u","w","u","u","u","u","u","u","u","u","m"],

],true);

allRooms["u"].addMap([
  ["f","b","b","b","b","a","a","a","b","b","b","b","b","b","b","b","b","g"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["h","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","i"],
],false);
allRooms["u"].addMap([
  ["w","w","w","w","w","w","5","w","w","w","w","w","w","w","w","w","w","w"],
  ["w"," "," "," ","w"," ","X"," "," "," "," "," "," ","w"," "," "," ","w"],
  ["w"," "," "," ","w"," "," "," "," "," "," "," "," ","w"," "," "," ","w"],
  ["w"," "," "," ","w"," "," "," "," "," "," ","0"," ","w"," "," "," ","w"],
  ["w"," "," "," ","w","u","u","w","w","w","w","u","d","w"," "," "," ","w"],
  ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
  ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
  ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
  ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
  ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
  ["w"," "," "," ","%","%"," "," "," "," "," ","%","%"," "," "," "," ","w"],
  ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
  ["w"," "," "," "," "," "," "," ","@"," "," "," "," "," "," "," "," ","w"],
  ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
  ["w","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","w"],
],true);

allRooms["l"].addMap([
  ["f","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","g"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["h","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","/"],
],false);
allRooms["l"].addMap([
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" ","c"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" "," "," ","f"," "," "," "," "," "," "," "," ","f"," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "," ","%"," "," "," "," "],
  [" "," "," "," "," "," ","l"," ","l"," ","l"," "," ","&"," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," ","%","&"," "," "," "," "],
  [" "," "," "," "," "," ","l"," ","l"," ","l"," ","%","&"," "," "," "," "],
  [" "," ","%"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" "," ","%"," "," "," ","l"," ","l"," ","l"," "," ","f"," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," ","%"," "," ","f"," "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," ","%"," "," "," "," "," "," "," "," ","c","u","d","u","u"],
  [" "," ","@"," "," "," "," "," "," "," "," "," "," "," ","w"," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"," ","x"," "],
  [" ","u","u","u","u","u","u","u","u","u","u","u","u","u","w"," "," "," "],
],true);

allRooms["m"].addMap([
  ["f","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","g"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["h","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","i"],
],false);
allRooms["m"].addMap([
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," ","c"," "," ","w"," ","x"," "],
  [" "," ","c"," "," "," "," "," "," "," "," "," "," "," ","w"," "," "," "],
  [" "," "," "," ","l"," ","l"," ","l"," ","l"," ","c"," ","w"," "," "," "],
  [" "," "," "," "," ","c"," "," "," ","c"," "," "," "," ","w","u","d","u"],
  [" "," "," "," ","l"," ","l"," ","l"," ","l"," "," "," "," ","c"," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," ","%"," "," "," "," "," "],
  [" "," "," "," ","l"," ","l"," ","l"," ","l","%"," "," "," "," "," "," "],
  [" "," ","c"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," ","l"," ","l"," ","l","c","l"," ","c"," ","c"," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," ","%"," "," "," "," "," "," "," "," "," "],
  [" "," "," "," ","%"," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" ","@"," "," "," "," "," "," "," "," "," "," ","c"," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
],true);

allRooms["n"].addMap([
  ["f","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b",">"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["h","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","i"],
],false);
allRooms["n"].addMap([
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," ","c"," ","c"," ","c"," ","c"," ","c"," ","c"," ","x"," "],
  [" "," ","&","f","l","f","l","c","l","f","l","f","l","f","l","&"," "," "],
  [" ","%"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" "," "," ","f","l","f","l","c","l","f","l","f","l","f","l"," ","&"," "],
  [" "," "," "," "," "," ","&"," "," "," "," "," "," "," "," ","%"," "," "],
  [" "," "," ","f","l","f","l","c","l","f","l","f","l","f","l"," "," "," "],
  [" "," ","%"," "," "," "," "," "," "," "," "," "," "," "," "," ","%"," "],
  [" "," ","%","f","l","f","l","c","l","f","l","f","l","f","l"," "," "," "],
  [" "," ","%","&","&","%"," "," "," "," ","%","%","%"," "," "," "," "," "],
  [" "," ","%","f","l","f","l","c","l","f","l","f","l","f","l"," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","&"," "," "],
  [" ","@","%","f","l","f","l","c","l","f","l","f","l","f","l"," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," ","%"," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
],true);

allRooms["p"].addMap([
  ["f","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","g"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
  ["h","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","i"],
 ],false);
allRooms["p"].addMap([
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"," "," "],
  [" ","&","@"," "," "," "," "," "," "," "," "," ","&"," ","%","w","x"," "],
  [" ","%"," ","l"," ","l"," "," "," ","l"," ","l"," ","l"," ","w"," "," "],
  [" "," "," "," ","&"," "," "," "," "," "," "," ","%"," "," ","w","d","u"],
  [" ","l"," ","l"," ","l"," ","l","&","l"," ","l"," ","l"," ","l"," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" ","l"," ","l"," ","l"," ","l","%","l"," ","l"," ","l"," ","l"," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
  [" ","l"," ","l"," ","l"," ","l"," ","l"," ","l"," ","l"," ","l"," "," "],
  [" "," "," "," ","%"," "," "," "," "," "," "," "," "," "," "," ","%"," "],
  [" "," "," ","l"," ","l"," ","l"," ","l"," ","l"," ","l"," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," ","&"," "," "," "," "," "],
  [" ","%"," "," "," ","l"," ","l"," ","l"," ","l"," ","l"," "," ","&"," "],
  [" "," "," "," "," "," ","%"," "," "," "," "," "," "," "," ","%"," "," "],
  [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
],true);

// allRooms["w"].addMap([
// ["f","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","g"],
// ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
// ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
// ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
// ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
// ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
// ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
// ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
// ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
// ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
// ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
// ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
// ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
// ["c","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","d"],
// ["h","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","i"],// ],false);
// allRooms["w"].addMap([
//   ["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
//   ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
//   ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
//   ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
//   ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
//   ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
//   ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
//   ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
//   ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
//   ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
//   ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
//   ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
//   ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
//   ["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
//   ["w","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","w"],
// ],true);


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

map[boatY][boatX] = "A";
map[15][15] = "q";
map[12][14] = "l";
map[10][17] = "r";
map[9][21] = "m";
map[11][26] = "s";
map[12][22] = "n";
map[14][20] = "t";
//debugger;
// var placeIslands = function() {
//   for(var i=0; i<Math.min(oh,ow)/2; i+=1) {
//     for(var y=0+i; y<oh-i; y++) {
//       for(var x=0+i; x<ow-i; x++) {
//         var rand = Math.random();
//         if(rand<.003*i) {
//           map[y][x] = "q";
//         }
//       }
//     }
//   }
// }
// placeIslands();
// map[boatY][boatX] = "u";

allRooms["overworld"].addMap(map, false);
allRooms["overworld"].addSprite(boat);

var oni = new Sprite(570,290,80);
oni.health = 10;
oni.super = allSuperSprites["OniSprite"];
oni.ballColor = "#666";

allRooms["u"].addSprite(oni);
allRooms["u"].monsters.push(oni);
