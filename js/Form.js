class Form{

    constructor(){
        this.input=createInput("Name")
        this.button=createButton("Start")
        this.greeting=createElement('h3')
    }

hide(){
    this.button.hide()
    this.greeting.hide()
     this.input.hide()
}
display(){
var title= createElement('h2')
title.html("CAR RACING")
title.position(150, 20)

this.input.position(150, 180)
this.button.position(250, 220)
this.button.mousePressed(()=> 
{
this.input.hide()
this.button.hide()
 player.name=this.input.value()
    playerCount++
    player.index=playerCount;
player.update ()

player.updateCount(playerCount)
this.greeting.html("Hello, "+player.name )  
this.greeting.position(180, 150)
})
}
}


