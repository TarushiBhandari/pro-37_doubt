var gameState, contestantCount, database;
var quiz, question, contestant, name;

function setup(){
  canvas = createCanvas(1100,800);

  database = firebase.database();

  quiz= new Quiz();
  quiz.getState();
  quiz.start();

  question= new Question();
}

function draw(){
  background("pink");
question.display();
  
}
