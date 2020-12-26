var database
var gameState=0;
var player,form,playerCount;
var game;
var allPlayers;


function setup()
{
createCanvas(400, 400);
database=firebase.database();
game=new Gamestate()
game.getState()
game.start()
}

function draw()
{
if(playerCount===4){
    game.update(1)

}
if(gameState===1){
    game.play()}
}


