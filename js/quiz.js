class Quiz{
    constructor(){}

    getState(){
        var gameState= database.ref('gameState');
        gameState.on("value",function(data){
            gameState= data.val();
        });
    }

    updateState(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState===0){
            contestant= new Contestant();
            var contestantCountRef= await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount= contestantCountRef.val();
                contestant.getCount();
            }
            if(keyIsDown(UP_ARROW)){
                contestant.update();
              }
            question= new Question();
            question.display();
        }
    }

    display(){
        
    }
}