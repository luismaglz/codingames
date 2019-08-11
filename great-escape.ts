/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const w = parseInt(inputs[0]); // width of the board
const h = parseInt(inputs[1]); // height of the board
const playerCount = parseInt(inputs[2]); // number of players (2 or 3)
const myId = parseInt(inputs[3]); // id of my player (0 = 1st player, 1 = 2nd player, ...)
let initialX:number = 0;
let initialY:number = 0;
let cycles:number = 0;

class Unit {
    x: number;
    y: number;
    wallsLeft:number;

    set(x: number, y: number, walls: number){
        this.x = x;
        this.y = y;
        this.wallsLeft = walls;
    }
    constructor(x:number, y: number, walls: number){
        this.x = x;
        this.y = y;
        this.wallsLeft = walls;
    }
}

const guys: Unit[] = [];

function move(){
    if(initialX === 0){
        console.log('RIGHT');
    }
    if(initialX === w - 1){
        console.log('LEFT');
    }
    if(initialY === 0){
        console.log('DOWN');
    }
    if(initialY === h - 1){
        console.log('UP');
    }
}

function updateGameState(){
    for (let i = 0; i < playerCount; i++) {
        var inputs = readline().split(' ');
        const x = parseInt(inputs[0]); // x-coordinate of the player
        const y = parseInt(inputs[1]); // y-coordinate of the player
        const wallsLeft = parseInt(inputs[2]); // number of walls available for the player

        if(!guys[i]){
            guys[i] = new Unit(x, y, wallsLeft);
        } else {
            guys[i].set(x, y , wallsLeft);
        }

        if(!cycles && i === myId){
            initialX = x;
            initialY = y;
        }
    }
    const wallCount = parseInt(readline()); // number of walls on the board
    for (let i = 0; i < wallCount; i++) {
        var inputs = readline().split(' ');
        const wallX = parseInt(inputs[0]); // x-coordinate of the wall
        const wallY = parseInt(inputs[1]); // y-coordinate of the wall
        const wallOrientation = inputs[2]; // wall orientation ('H' or 'V')
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
