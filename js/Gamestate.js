class Gamestate{

constructor(){

 }
getState()  
{
var state=database.ref('gameState')
state.on("value", function (data){
    gameState=data.val();
})
}
update(state)
{
    database.ref('/').update({
        gameState:state
    });
}
start()
{
    if(gameState===0){
        player = new Player();
        var p1=await database.ref('playerCount').once("value")
        if (p1.exists())
        {
            playerCount=p1.val()
            player.getCount();
        }
        form= new Form();
        form.display();
    }
}
play(){

    form.hide()
    textSize(29)
    text("Game start", 170, 80)

    Player.getPlayerInfo()
    if(allPlayers!==undefined){
        var position=130
        for (var i in allPlayers)
{
    if(i==="player"+player.index)
{
    fill("red")
}
else{
    fill("black")
}
position=position+20
text(allPlayers[i].name+":"+allPlayers[i].distance,120, position)
}
        
    }
    if(keyIsDown(UP_ARROW && player.index!=null)){
        player.distance+=50
    player.update()
    }
}


}
