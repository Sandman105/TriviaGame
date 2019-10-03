//Pseudo-Code 
// 1.) So we need a .on click to start the game, so we need to have the intialization function for that click start.

// 2. ) We need a setTimer method to start the timer when the game starts. We display the counter, set for 30 seconds or whatever time you set for the users.

// 3.) There is a question and radio buttons for each suggested answer, so what I was saying earlier today was make an object with an array to store you questions, and also the answers. Each answer will be reference by the index number. There are radio buttons in bootstrap that the user can tick. Also, we can create a function maybe to randomize the question, Math.random and a for loop to randomly loop through the questions to post, so they would be different each time. ( We can start with maybe three questions, and the answers, and the wrong answers.) Also, remember you can only provide one answer for each question, so we need something to prevent the user from doing that, picking multiple radio buttons.

// 4.) So when timer runs out, the game ends, it shows you answers correct, answers, answers unanswered, so we need three empty vairables for correct, incorrect, and unanswered, and these are intervals, so might need parseInt method. And when we restart the game, those empty variables need to be in the initializeGame function to clear the game and start over.

// 5.) We could put in a restart or play again on click function to restart the game.

// 6.) There is also a DONE button when you finish the answer questions, so an on click function to stop the game, then a display of answers right, wrong, and unanswered. So we need a conditional here to stop game when completed.

// 7.) So on my HTML, need to create classes and id's to associate the the clicks.

// 8.) We need to make a conditional to associate the right answer to increase the counter of wins, wrong answer, counter increases.

// 9.) Could do added features if possible, speed up timer as you get closer to the end of the questions. So a setTimer at different stages, after 3 questions, speed up?








//VARIABLES==================================================================


//So some global variables

var answersCorrect = 0;
var answersWrong = 0;
var unansweredQuestion = 0;






//FUNCTIONS====================================================================

//Reset function for the start of new game, loading the page, and when the game is over.

function initializeTriviaGame() {

    answersCorrect = 0;
    answersWrong = 0;
    unansweredQuestion = 0;

    //Somewhere in here I need to have the timer reset setTimer function, acutally I just need to call the function inside here. But will come back to the timer later in the process



}


//On click for the start button, will call the initializeTriviaGame function here. Checked console, no errors. (10/2/19) 8:43 PM ET.

$("#start-game").on("click", function(){

    initializeTriviaGame ();

});