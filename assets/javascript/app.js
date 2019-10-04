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

// 10.) Populate the HTML elements dynamically using jQuery with the questions and answers so each time you start the game it randomizes the questions.








//VARIABLES==================================================================


//So some global variables

$(document).ready(function () {

    var answersCorrect = 0;
    var answersWrong = 0;
    var unansweredQuestion = 0;
    var answersTotalCorrect = 0;
    var answersTotalWrong = 0;
    var unansweredTotalQuestion = 0;
    var gameTriviaQuestions = [
        {
            question: "What is Madeline Kahn's character name in Blazing Saddles?",
            choices: ["Empress Nympho", "Victoria Brisbane", "Lili Von Shtupp", "Mrs. White", "Elizabeth"],
            correct: "Lili Von Shtupp",
        },
        {
            question: "What line is this movie from, 'Don't get saucy with me, Bearnaise!'?",
            choices: ["High Anxiety", "The Producers", "Silent Movie", "History of the World, Part 1", "Life Stinks"],
            correct: "History of the World, Part 1",
        },
        {
            question: "What actor plays the Waco Kid in Blazing Saddles?",
            choices: ["James Cann", "Robert Shaw", "Ben Vareen", "Gene Wilder", "Richard Dreyfuss"],
            correct: "Gene Wilder"

        },
        {
            question: "What actress plays the part of Frau Blücher in Young Frankenstein?",
            choices: ["Cloris Leachman", "Lori Petty", "Fran Drescher", "Teri Garr", "Gilda Radner"],
            correct: "Cloris Leachman"
        },
        {
            question: "In Spaceballs, the character 'Barf' is played by what actor?",
            choices: ["Bill Murray", "Eugene Levy", "Christopher Guest", "Chevy Chase", "Garrett Morris"],
            correct: "John Candy"
        },
    ];



    //FUNCTIONS====================================================================

    //Reset function for the start of new game, loading the page, and when the game is over.

    function initializeTriviaGame() {

        answersCorrect = 0;
        answersWrong = 0;
        unansweredQuestion = 0;
        answersTotalCorrect = 0;
        answersTotalWrong = 0;
        unansweredTotalQuestion = 0;
        //gameTrivia = "";

        //Somewhere in here I need to have the timer reset setTimer function, acutally I just need to call the function inside here. But will come back to the timer later in the process



    }


    //As an EXTRA, after getting game to work, maybe add a math function to randomize the questions everytime game is restarted.



    //On click for the start button, will call the initializeTriviaGame function here. Checked console, no errors. (10/2/19) 8:43 PM ET.

    $("#done").on("click", function () {



    });

    //Restart game button on the all_done.html page. May need to not use a second HTML page, might be a little too complex at the moment. Might need to move that container to main index.html.

    $("restart").on("click", function () {

        initializeTriviaGame();

    });

    //CONDITIONALS=====================================================================

    if (gameTriviaQuestions.correct[i]) {
        answersCorrect++;
        $("total-correct").html(answersTotalCorrect);

    }
    //Not sure how to state when user answers wrong answer
    else if () {
        answersWrong++;
        $("total-wrong").html(answersTotalWrong);
    }









    //Restart trivia game when page is reloaded

    initializeTriviaGame();

});