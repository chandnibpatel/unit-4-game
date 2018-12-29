// Variable Declarations
var number1;
var number2;
var number3;
var number4;
var userTotal=0;
var targetTotal =0;
var winTotal = 0 ;
var loseTotal = 0 ;
var gameTotal = -1 ;



function startGame(){
    
    userTotal = 0;
    targetScore = 0;
    gameTotal = gameTotal + 1;
    number1 = (Math.round(Math.random()*11)) + 1;
    number2 = (Math.round(Math.random()*11)) + 1;
    number3 = (Math.round(Math.random()*11)) + 1;
    number4 = (Math.round(Math.random()*11)) + 1;
    targetTotal = (Math.round(Math.random()*101)) + 19;
    console.log("target: " + targetTotal);
 };

function sum(inptNum){
    userTotal = userTotal + inptNum;
    
    
    if (userTotal == targetTotal){
        winTotal = winTotal + 1;
        $("#gameStatMsg").text("You Won!!");
        // alert("You Won , your score is : " + userTotal); 
        startGame();
    }
    else if (userTotal > targetTotal){
        loseTotal = loseTotal + 1;
        console.log("userTotal: " + userTotal);
        $("#gameStatMsg").text("You lost!!");
        // alert("You have lost , your score is : " + userTotal); 
        startGame();
       
    }
   
    displayStat();
   
};

function displayStat(){
    $("#targetScore").text(targetTotal);
    $("#userScore").text(userTotal);
    $("#winScore").text("Total Win: " + winTotal);
    $("#loseScore").text("Total Lose: " + loseTotal);
    $("#gameScore").text("Total Games: " + gameTotal);
};

$(document).ready(function() {
 var imgCrystal = $(".crystal-img");
 startGame();
 displayStat();

 $(".cryst1-button").on("click", function() {
    sum(number1);
   
    console.log("number: " + number1);
  });
  $(".cryst2-button").on("click", function() {
    sum(number2);
  
    console.log("number: " + number2);
  });
  $(".cryst3-button").on("click", function() {
    sum(number3);
  
    console.log("number: " + number3);
  });
  $(".cryst4-button").on("click", function() {
    sum(number4);

    console.log("number: " + number4);
  });
});
