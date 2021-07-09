class Game{
    constructor(){
        this.input = createInput("Enter Your Name");
        this.input.position(700 ,400);
        this.button = createImg("images/lol.png");
        this.button.position(750, 500);
        this.button.style("width", "70px");
        this.buttonPressed = false;
    }

    getState(){
        //code to read data from database
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })

    }
        
    updateState(state){
        //Code to write data to gameState
        database.ref('/').update({
            gameState: state
        });
    }

    start(){
        if(this.buttonPressed != true){

            background(scroll);
            fill("black");
            textSize(25);
            text("RULES",700,150);
            fill("black");
            textSize(15)
            text("1)In this game , first you will choose you're respective characters and then you will be divided into two lanes", 400,200);
            fill("black");
            text("2)After that , there will be a race , there will be obstacles to slow you down , if you get hit , you have to start again",400,250);
            fill("black");
            text("3)If you die , the obstacles spawn rate increases making the game intersting and more harder",400,300);
            fill("black");
            text("4)If one player crosses the finish line that player wins and receives a crown that has in itself unlimited amount of chakra",400,350);
            fill("black")
            textSize(25);
            text("Best Of Luck , Hope You Win! Click the start button below to continue!",400 , 450);
            

            this.button.mousePressed(()=>{
                
                this.button.hide();
                playerCount+=1;
                player.index=playerCount;
                player.updateCount(playerCount);
                player.name = this.input.value();
                player.update();
                this.input.hide();
                this.buttonPressed = true;
            })

        }

        else{
            background("white");
            textSize(25);
            fill("black");
            text("Choose your Characters!" , 650 , 200);
            
        }
        //start state of the game
        

    }

    play(){
        //play state of the game
        background("white");
    }

}