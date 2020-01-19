// Game variable to hold wins and losses
let game = {
    wins: 0,
    losses: 0,
    tie: 0
};



let gameID = "";

$("#new-game").on("click", function(){
    // Create a new unique ID. 
    gameID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    // Assign it in the database
    // Show the game ID on the page
    // reset the game
    // clear the page
    $("#game-display").html("");
});

$("#resume-game").on("click", function(){
    // set game ID to the inputted ID
    // Pull variables out of the DB and store locally

});

$(document).ready(function(){

});