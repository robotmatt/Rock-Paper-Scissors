// Game variable to hold wins and losses
let game = {
    wins: 0,
    losses: 0,
    tie: 0, 
    playerHasSelected: false,
    opponentHasSelected: false,
    playerSelection: "",
    opponenentSelection: ""
};

let gameID = "";

let timer;

// Function: compare
function compare(){
    if(game.playerSelection === game.opponenentSelection){
        return "tie";
    } else if(game.playerSelection === "rock" && game.opponenentSelection === "paper"){
        return "lose";
    } else if(game.playerSelection === "rock" && game.opponenentSelection === "scissor"){
        return "win";
    } else if(game.playerSelection === "scissor" && game.opponenentSelection === "paper"){
        return "win";
    } else if(game.playerSelection === "scissor" && game.opponenentSelection === "rock"){
        return "lose"
    } else if(game.playerSelection === "paper" && game.opponenentSelection === "rock"){
        return "win"
    } else if(game.playerSelection === "paper" && game.opponenentSelection === "scissor"){
        return "lose"
    }
};

function displayScore(){
    $("#score").attr("class", "fixed");
    $("#score-wins").text("Wins: " + game.wins);
    $("#score-losses").text("Losses: " + game.losses);
    $("#score-tie").text("Wins: " + game.tie);
}

function resetGame(){
    clearTimeout();
    $("#game-display").html("<h1 class='display-4'>Make a Selection</h1>");
    $("#your-selection").text("");
    $("#opponent-selection").text("");
}

$("#new-game").on("click", function(){
    // Create a new unique ID. 
    gameID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    // Assign it in the database
    // Show the game ID on the page
    // reset the game
    // clear the page
    resetGame();
    displayScore();
});

$("#resume-game").on("click", function(){
    // set game ID to the inputted ID
    // Pull variables out of the DB and store locally

});

$(document).on("click", ".selection-btn", function(){
    if(!game.playerHasSelected){
        game.playerHasSelected = true;
        game.playerSelection = $(this).attr("data-type");
    
        // Display to your selection spot
        $("#your-selection").text(game.playerSelection);
        $("#game-display").html("<h1 class='display-4'>Oppenent, your turn.</h1>");
    } else if (game.playerHasSelected && !game.opponentHasSelected){
        // move to the opponent
        game.opponentHasSelected = true;
        game.opponenentSelection = $(this).attr("data-type");
    
        // Display to your selection spot
        $("#opponent-selection").text(game.opponenentSelection);
        winner = compare();
        if(winner === "win"){
            // Update Score
            game.wins++;
            // Show winnerz
            $("#game-display").html("<h1 class='display-4'>you win</h1>");
        } else if(winner === "lose"){
            // Update Score
            game.losses++;
            // Show winnerz
            $("#game-display").html("<h1 class='display-4'>you lose</h1>");
        } else if(winner === "tie"){
            // Update Score
            game.tie++;
            // Show winnerz
            $("#game-display").html("<h1 class='display-4'>you tie</h1>");
        }
        game.playerHasSelected = false;
        game.opponentHasSelected = false;
        displayScore();
        timer = setTimeout(resetGame, 3000);
    }
    
});

$(document).ready(function(){

});