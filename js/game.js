class Game{

constructor(){

}
getState(){
    var gameStateref = database.ref("gameState");
    gameStateref.on("value", function(data){
        gameState = data.val();
    })
}
update(state){
    database.ref("/").update({
        gameState:state
    })

}
async start(){
    if(gameState==0){
    player= new Player();
    var playercountref=await database.ref("playerCount").once("value");
    if(playercountref.exists()){
        playerCount=playercountref.val()
        player.getCount();
    }
   
    form = new Form();
    form.display();
        
    }
}
 play(){
     form.hide()
     textSize(35);
     text("let's began", 150, 200);
     Player.getplayerinfo();
     if(allPlayer!==undefined){
         var displayPosition = 160;
         for(var plr in allPlayer){
             if(plr==="player"+player.index){
            fill("red");
             }
        else{
            fill("green");
        }
        displayPosition+=28
    textSize(25);
    text(allPlayer[plr].name+"="+allPlayer[plr].distance, 150, displayPosition);

        

             }
             
         }
         if(keyIsDown(UP_ARROW) && player.index!==null){
             player.distance+=50;
             player.update

         }
     }

}