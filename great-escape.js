/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const w = parseInt(inputs[0]); // width of the board
const h = parseInt(inputs[1]); // height of the board
const playerCount = parseInt(inputs[2]); // number of players (2 or 3)
const myId = parseInt(inputs[3]); // id of my player (0 = 1st player, 1 = 2nd player, ...)

// game loop
while (true) {
    for (let i = 0; i < playerCount; i++) {
        var inputs = readline().split(' ');
        const x = parseInt(inputs[0]); // x-coordinate of the player
        const y = parseInt(inputs[1]); // y-coordinate of the player
        const wallsLeft = parseInt(inputs[2]); // number of walls available for the player
    }
    const wallCount = parseInt(readline()); // number of walls on the board
    for (let i = 0; i < wallCount; i++) {
        var inputs = readline().split(' ');
        const wallX = parseInt(inputs[0]); // x-coordinate of the wall
        const wallY = parseInt(inputs[1]); // y-coordinate of the wall
        const wallOrientation = inputs[2]; // wall orientation ('H' or 'V')
    }

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // action: LEFT, RIGHT, UP, DOWN or "putX putY putOrientation" to place a wall
    console.log('RIGHT');
}