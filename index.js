var buttoncolors=["red", "blue", "green", "yellow"];
var gamepattern=[];

var userClickedPattern=[];


var started= false;
var level = 0;

$(".btn").on("click",function() {

    // Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);
  playsound(userChosenColour);  
  
  animation(userChosenColour);
  
 
checkanswer(userClickedPattern.length-1); 



  });




function nextsquence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level " + level);
    var randomnumber =Math.floor(Math.random()*4);
    var randomchosencolor=buttoncolors[randomnumber];
   
    gamepattern.push(randomchosencolor);

    $("#" +randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomchosencolor);
 
 

}

 function playsound(name){
    var audio= new Audio("sounds/"+name+".mp3");
    audio.play();

 }

    $(document).on("keydown",function (){
        
        if (!started) {
            $("#level-title").text("Level " + level);
            nextsquence();
            started = true;
          }

    });

    function animation(currentcolor){
        $("#"+currentcolor).addClass("pressed");
        setTimeout(function (){
  $("#"+currentcolor).removeClass("pressed");
        },100);
    }

function checkanswer(currentlevel){
if(gamepattern[currentlevel] === userClickedPattern[currentlevel]){
   
if(userClickedPattern.length === gamepattern.length){
    setTimeout(function (){
        nextsquence();
    },1000);
}
}
else{
    

   var endsound= new Audio("sounds/wrong.mp3")
   endsound.play();
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function (){
$("body").removeClass("game-over");
    },200);
 startover();
}

 }

function startover(){
        level=0;
        gamepattern=[];
        started=false;
    }