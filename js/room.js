/*#########################################################################################
          ROOM
  -- This file is where any functionality that occurs on the room level should be defined
###########################################################################################*/


/////TEST ENTITY -- added to test the rooms ability to handle different sprites -- should be removed eventually
function TestEntity1() {
  this.sprite = new Sprite(0,0,20, "blue");
}
function TestEntity2() {
  this.sprite = new Sprite(0,0,20, "green");
}


//  Room constructor
//  -- To be called in room-definitions.js. To create a room call the function and pass it
//      the width and height in tiles of the room to be created.
function Room(width, height) {
  this.width = width;
  this.height = height;
  this.background = [];
  this.backgroundAnimations = [];
  this.sprites = [];
  this.entities = [];
  this.entrance = undefined;
  // -- for the overworld room
  this.boatX = Math.floor(this.width/2);
  this.boatY = Math.floor(this.height/2);
  // -- Boolean to stop triggering the light puzzle repeatedly -- //
  this.lightPuzzlePlayerBoolean = false;
  // -- variable to make collisionCheckLightPuzzle work -- //
  this.triggeredLight;
  // -- set up the light puzzle -- //
  this.currentLightPuzzle = [];
  this.wallObjects = [];
}

// addMap method
//  -- To set up a room using maps, call this function in room-definitions.js.
//      Maps are 2D arrays containing single character strings representing eith the background tiles
//      or the game entites that comprise a room. To find out what strings represent what objects,
//      see tileDict and entityDict in room-definitions.js. Maps of tiles are for the background.
//      When adding a background map, the foreground parameter should be passed false. Maps of
//      tiles are for the foreground. When adding a foreground map, the foreground parameter should be passed true.
Room.prototype.addMap = function(map, foreground) {
  if(foreground) {
    this.foreground = map;
    for(var y=0; y<this.height; y++) {
      for(var x=0; x<this.width; x++) {
        var icon = this.foreground[y][x];
        if(icon!=" ") {
          var newEntity = entityDict.get(icon);
          if(newEntity!="") {
            if(newEntity instanceof Sprite) {
              this.sprites.push(newEntity);
              newEntity.yPos = y*64+32;
              newEntity.xPos = x*64+32;
            } else {
              this.entities.push(newEntity);
              newEntity.sprite.yPos = y*64+32;
              newEntity.sprite.xPos = x*64+32;
              this.sprites.push(newEntity.sprite);
            }
          }
        }
        if(icon==="l") {
          this.currentLightPuzzle.push(newEntity);
          newEntity.column = ((x/2)+1)*10;
          newEntity.row = (y/2)+1;
          newEntity.sprite.ballColor = "brown";
        } else if(icon==="@") {
          this.entrance = newEntity;
        } else if(icon==="w" || icon==="x" || icon==="b") {
          this.wallObjects.push(newEntity);
        }
      }
    }
  } else {
    this.background = map;
    for(var y=0; y<this.height; y++) {
      this.backgroundAnimations.push([]);
      for(var x=0; x<this.width; x++) {
        this.backgroundAnimations[y].push(tileDict[this.background[y][x]].copy());
      }
    }
  }
}

// sortSprites and addSprite methods
//  -- These methods do not need to be called manually if using a map to set up a room.
//      If you want to add sprites to a room manually, call addSprite and pass it the sprite to be added
Room.prototype.sortSprites = function() {
  this.sprites.sort(function(a, b) {
    if(typeof a.super != "undefined") {
      if(a.super.currentAnimation.spriteSheet.src===allSuperSprites["LightPanelSprite"].currentAnimation.spriteSheet.src) {
        return -1;
      }
    }
    if(a.yPos < b.yPos) {
      return -1;
    } else if(a.yPos > b.yPos) {
      return 1;
    } else {
      return 0;
    }
  });
}
Room.prototype.addSprite = function(sprite) {
  this.sprites.push(sprite);
  this.sortSprites();
}

// draw and update methods
// -- these methods are to be called in the main game loop and contain code that is to be run every step of the game
Room.prototype.draw = function(ctx) {
  for(var y=0; y<this.height; y++) {
    for(var x=0; x<this.width; x++) {
      ani = this.backgroundAnimations[y][x];
      ani.play(ctx, 2*ani.frameArray[0].width*x, 2*ani.frameArray[0].height*y);
    }
  }
  for(var i=0; i<this.sprites.length; i++) {
    this.sortSprites(this.sprites[i]);
    this.sprites[i].draw();
  }
}
Room.prototype.update = function() {
  boat.xPos = currentRoom.boatX*tileDict["~"].frameArray[0].width*2 + (tileDict["~"].frameArray[0].width);
  boat.yPos = currentRoom.boatY*tileDict["~"].frameArray[0].height*2  + (tileDict["~"].frameArray[0].height);
  this.collisionCheckLightPuzzle(player, this.currentLightPuzzle);
  // -- Checks if light puzzle is completed and 'opens' the East door if it is. -- //
  if (this.lightPuzzleCompleteCheck(this.currentLightPuzzle, true) === true) {
    //Puzzle
  }
  for(var i=0; i<this.sprites.length; i++) {
    if (this.sprites[i] === player) {
      if (weaponTimer <= time && monsterHitTimer <= time) {
        this.sprites[i].update();
      } else {}
    } else {
      this.sprites[i].update();
    }
  }
  for (var i=0; i < this.wallObjects.length; i++) {
    this.wallObjects[i].collisionWithSprite(player);
  };
}

// findIsland and moveOverworld methods
// -- These methods deal with movement in the overworld
Room.prototype.findIsland = function(startX, startY) {
  var left = startX; var right = startX; var up = startY; var down = startY;
  while(true) {
    if(left-1>=0){left--;}
    if(right+1<this.width){right++;}
    if(up-1>=0){up--;}
    if(down+1<this.height){down++;}
    for(var x=left; x<=right; x++) {
      if(this.background[up][x]!="~") {
        return[x,up];
      } else if(this.background[down][x]!="~") {
        return[x,down];
      }
    }
    for(var y=up; y<down; y++) {
      if(this.background[y][left]!="~") {
        return[left,y];
      } else if(this.background[y][right]!="~") {
        return[right,y];
      }
    }
  }
}
Room.prototype.moveOverworld = function(direction) {
  if(0 < direction&&direction < 10) {
    var newX = this.boatX;
    var newY = this.boatY;
    if(direction>6) {
      newY--;
    } else if(direction<4) {
      newY++;
    }
    if((direction-1)%3===0) {
      newX--;
    } else if(direction%3===0) {
      newX++;
    }
    if(0 <= newX&&newX < this.width  &&  0 <= newY&&newY < this.height) {
      supplies --;
      if(supplies<1) {
        //health = Math.floor(health/2);
        var nearestCoords = this.findIsland(boatX, boatY);
        newX = nearestCoords[0];
        newY = nearestCoords[1];
      }
      this.boatX = newX;
      this.boatY = newY;
      if(this.background[newY][newX]!="~") {
        boat.super.show("momohead");
        return this.background[newY][newX];
      } else {
        boat.super.show("boat");
      }
    }
  }
  return "overworld";
}

// Light puzzle methods
// -- these methods are used to make light puzzles work
Room.prototype.collisionCheckLightPuzzle = function(triggeringSprite, lightPuzzleArray) {
  for (var i = 0; i < lightPuzzleArray.length; i++) {

    if (calculateDistance(lightPuzzleArray[i].sprite, triggeringSprite) <= (lightPuzzleArray[i].sprite.radius + triggeringSprite.radius) && !this.lightPuzzlePlayerBoolean) {
      lightPuzzleArray[i].toggleLights(this.currentLightPuzzle);
      this.triggeredLight = lightPuzzleArray[i].sprite;
      this.lightPuzzlePlayerBoolean = true;
    }
  }
  if (this.lightPuzzlePlayerBoolean === true && calculateDistance(this.triggeredLight, player) > this.triggeredLight.radius + triggeringSprite.radius + 10) {
    this.lightPuzzlePlayerBoolean = false;
  }
}

// -- Checks that all isLit booleans in an array, lightArray, match the boolean you input in booleanToMatch -- //
Room.prototype.lightPuzzleCompleteCheck = function(booleanToMatch) {
  var puzzleCompleted = true;
  for (var i = 0; i < this.currentLightPuzzle.length; i ++) {
    if (this.currentLightPuzzle[i].isLit != booleanToMatch) {
      puzzleCompleted = false;
    }
  };
  return puzzleCompleted;
};
