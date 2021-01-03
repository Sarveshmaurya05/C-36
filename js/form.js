class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Press me to play the game");
        this.greeting = createElement("h2")

    }
    hide(){
        this.input.hide()
        this.greeting.hide()
        this.button.hide()
    }
    display(){
        var title = createElement("h1");
        title.html("Lighting the queen")
        title.position(150, 20);
        
        this.input.position(150, 200);
       
        this.button.position(250, 250);
       
        this.button.mousePressed(()=>{
          this.input.hide()
            this.button.hide()
        player.name = this.input.value() 
        playerCount = playerCount+1;
        player.index=playerCount
        player.updatecount(playerCount);
        player.update();
       this.greeting.html("Hello"+player.name);
        this.greeting.position(280, 280);


        })
        
     
    }
}