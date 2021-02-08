class Question{
    constructor(){

        this.input= createInput("Name");
        this.input2= createInput("Answer");
        this.button= createButton("Submit");
    }

    display(){
        var title= createElement('h1');
        title.html("Quiz Game");
        title.position(450,20);

        var title2= createElement('h1')
        title2.html("QUESTION- Ravina tells Karishma that, 'your sister is the daughter");
        title2.position(20,100);

        var title3= createElement('h1');
        title3.html(" of my mother's brother'. how is karishma related to ravina's mother's brother");
        title3.position(20,140);

        var option1= createElement('h1');
        option1.html("1. Daughter");
        option1.position(100,280);
        var option2= createElement('h1');
        option2.html("2. Aunt");
        option2.position(100,320);
        var option3= createElement('h1');
        option3.html("3. Daughter-in-law");
        option3.position(100,360);
        var option4= createElement('h1');
        option4.html("4. Mother");
        option4.position(100,400);

        this.input.position(200,500); 
        this.input2.position(500,500);
        this.button.position(400,550);
    
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.input2.hide();
            contestant.name= this.input.value();
            contestantCount+= 1;
            contestant.update();
            contestant.updateCount(contestantCount);

           });
}}