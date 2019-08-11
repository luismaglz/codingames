"use strict";
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
var inputs = readline().split(' ');
var w = parseInt(inputs[0]); // width of the board
var h = parseInt(inputs[1]); // height of the board
var playerCount = parseInt(inputs[2]); // number of players (2 or 3)
var myId = parseInt(inputs[3]); // id of my player (0 = 1st player, 1 = 2nd player, ...)
var initialX = 0;
var initialY = 0;
var cycles = 0;
var Unit = /** @class */ (function () {
    function Unit(x, y, walls) {
        this.x = x;
        this.y = y;
        this.wallsLeft = walls;
    }
    Unit.prototype.set = function (x, y, walls) {
        this.x = x;
        this.y = y;
        this.wallsLeft = walls;
    };
    return Unit;
}());
var guys = [];
function move() {
    if (initialX === 0) {
        console.log('RIGHT');
    }
    if (initialX === w - 1) {
        console.log('LEFT');
    }
    if (initialY === 0) {
        console.log('DOWN');
    }
    if (initialY === h - 1) {
        console.log('UP');
    }
}
function updateGameState() {
    for (var i = 0; i < playerCount; i++) {
        var inputs = readline().split(' ');
        var x = parseInt(inputs[0]); // x-coordinate of the player
        var y = parseInt(inputs[1]); // y-coordinate of the player
        var wallsLeft = parseInt(inputs[2]); // number of walls available for the player
        if (!guys[i]) {
            guys[i] = new Unit(x, y, wallsLeft);
        }
        else {
            guys[i].set(x, y, wallsLeft);
        }
        if (!cycles && i === myId) {
            initialX = x;
            initialY = y;
        }
    }
    var wallCount = parseInt(readline()); // number of walls on the board
    for (var i = 0; i < wallCount; i++) {
        var inputs = readline().split(' ');
        var wallX = parseInt(inputs[0]); // x-coordinate of the wall
        var wallY = parseInt(inputs[1]); // y-coordinate of the wall
        var wallOrientation = inputs[2]; // wall orientation ('H' or 'V')
    }
}
// game loop
while (true) {
    updateGameState();
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    // action: LEFT, RIGHT, UP, DOWN or "putX putY putOrientation" to place a wall
    move();
    cycles++;
}
