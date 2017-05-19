
//CREATE ARRAY FOR HANGMAN WORD CHOICES 

var orchestra = ["cello", "strings", "classical", "violin", "instrument", "conductor", "symphony", "bass", "viola", "allegro"];
var usedLetters = [];
var imgArray = [
    'assets/images/cello.jpg',
    'assets/images/strings.jpg',
    'assets/images/classicalcomposers.jpg',
    'assets/images/violin.jpg',
    'assets/images/instruments.jpg',
    'assets/images/conductor.jpg',
    'assets/images/symphony.jpg',
    'assets/images/base.jpg',
    'assets/images/viola.jpg',
    'assets/images/allegro.jpg',
	];

//Define global variable and set inital valus for win, loss, and number of guesses
var win = 0;
var lose = 0;
var currentWord, placeholder, splitWord, totalLetters, guessCounter, userGuess, correctLetters;


// create function initialize
function initializeGame() {

	guessNumber = 10;
	usedLetters = [];
	correctLetters = 0;

//Randomly choose a word for the user to guess
	currentWord = orchestra[Math.floor(Math.random()*orchestra.length)];
	console.log(currentWord);
	orchestra.splice(currentWord, 1);  // This removes the picked element from the array
//Generate placeholder text for the word the computer chooses
	splitWord = currentWord.split("");
	
	for (var i = 0; i < splitWord.length; i++) {
		placeholder = splitWord;
		placeholder[i] = " _";
		};
    document.querySelector("#wordPlaceholder").innerHTML = "<p>" + placeholder.join('') + "</p>";

//Counts the number of total letters in the randommly chosen word
	totalLetters = placeholder.length;
}; //ending initialize() brace

initializeGame();

// Check if the letter has already been used
function prevGuess () {
	if (usedLetters.includes(userGuess)) { 
		return true;
	}
	else { 
		return false;
	}
}

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {
// Determine which key was pressed
	userGuess = event.key;

// Check if user input is only alphabet keys
check = function lettersOnly() {
	if (event.keyCode >= 65 && event.keyCode <= 90) {
    return true;
	} else {
	alert("Please press only alphabet keys!")
	}
}

// Comparing the user's guess to the letters contained in splitWord array (the picked word)
	// for (var i = 0; i < totalLetters; i++) {

			if (userGuess == currentWord[i]) {
			console.log ("You guessed " + userGuess);
			usedLetters.push(userGuess);
			}
			else {
			console.log("keep going");
			}
		};
// };
// // can there be a second part to the for loop here?
// 		else if ((userGuess != splitWord[i])) {
// 			// console.log("Wrong guess.")
// 			guessNumber--;
// 			alreadyGuessed.push(userGuess);
// 		}

// 		else if ((prevGuess() == true) || (lettersOnly()==false)) { 
// 			console.log("Keep guessing");
// 		}

// 		else {
// 			// return false;
// 			console.log("not sure what to do")
// 			}	
// 	}


/*
// Get the "_" to change back to the letter guessed
	for (var i = 0; i < splitWord.length; i++) {
		if (splitWord[i] == userGuess) {
			placeholder[i]=placeholder[i].replace(' _', userGuess);
			console.log(placeholder[i]);
			}
		};


// Check if user won or loss
correctLetters = 0;


for (var i = 0; i < splitWord.length; i++) {


		if ((splitWord[i] == placeholder[i])){
			correctLetters++;
			console.log("correct letters value: " + correctLetters);
			
			if ((totalLetters == correctLetters) && (guessNumber > 0)) {
				console.log("Congratulations!")
				win++;
				document.querySelector("#answer").innerHTML = "<p><strong>The correct word was: " + pickedWord +"</strong></p>";
				document.querySelector("#imgPlaceholder").innerHTML = '<img src="' + imgArray[i] + '">'
				initializeGame();
			}

		} else if ((totalLetters !== correctLetters) && (guessNumber <= 0)) {
			console.log("You lose")
			lose++;
			document.querySelector("#answer").innerHTML = "<p><strong>Sorry! The correct word was: " + pickedWord +"</strong></p>";
			initializeGame();
			}
};

// Create the HTML that will be injected into <span> and displayed on the page.

  // Display the word placeholder on our page.
	    var currentWord = "<p>" + placeholder.join('') + "</p>";
	    document.querySelector("#wordPlaceholder").innerHTML = currentWord;

  // Display Wins value on page
		document.querySelector("#wins").innerHTML = win;

  // Display Loses value on page
		document.querySelector("#losses").innerHTML = lose;

  // Display Guesses Remaining value on page
		document.querySelector("#guessRemain").innerHTML = guessNumber;

  // Display the Letters Already Guessed on page
	    var guessedLetters = alreadyGuessed.toString();
		document.querySelector("#guessLetter").innerHTML = guessedLetters;



}; //<--ending keyup function curly brace
*/