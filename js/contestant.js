class Contestant{
    constructor(){

        this.index= null;
        this.name= null;
    }

    getPlayerCount(){
        var contestantCountRef= database.ref('contestantCount');
        contestantCountRef.on("value",function(data){
          contestantCount= data.val();
        });
    }

    updatePlayerCount(count){
        database.ref('/').update({
          contestantCount: count
        });
    }

    updateName(){
        var playerIndex= "contestants/name"+this.index;
        database.ref(playerIndex).set({
            name: this.name
        });
    }
}