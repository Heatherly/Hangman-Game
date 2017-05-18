
//CREATE ARRAY FOR HANGMAN WORD CHOICES 

var theWord = ["cello", "strings", "classical", "violin", "instrument", "conductor", "symphony", "bass", "viola", "allegro"];

//Set inital valus for win, loss, and number of guesses
var win = 0;
var lose = 0;
var pickedWord, placeholder, splitWord, totalLetters, guessNumber, userGuess;
var alreadyGuessed = [];
var correctLetters = 0;

//create function initialize
function initializeGame() {

guessNumber = 10;
alreadyGuessed = [];
correctLetters = 0;

//Randomly choose a word for the user to guess
	for (var i = 0; i < theWord.length; i++) {
		var index = Math.floor(Math.random()*theWord.length);
		pickedWord = theWord[index];
		theWord.splice(index, 1);  // This removes the picked element from the array

//Generate placeholder text for the word the computer chooses
		placeholder = pickedWord.split("");
		for (var i = 0; i < placeholder.length; i++) {
			placeholder[i] = " _";
			console.log (placeholder[i]);
			} 
	}; //<--ending for-loop curly brace


//Creates array with the letters of the choosen word as my "master"
	splitWord = pickedWord.split("");

//Counts the number of total letters in the randommly chosen word
	totalLetters = splitWord.length;	
}; //ending initialize() brace

initializeGame();

// Check if user input is only alphabet keys
function lettersOnly() {
	var charCode = event.keyCode;
	if ((charCode > 64 && charCode < 91)) {
		console.log("You pressed alphabet key");
		return true;
	} else {
		console.log("Please press a letter key only");
		return false;
	}
}

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {

// Determine which key was pressed
var userGuess = event.key;

// Check if the letter has already been used
function prevGuess () {
	if (alreadyGuessed.includes(userGuess)) { 
		return true;
	}
	else { 
		return false;
	}
}

if (lettersOnly() == true) {
	console.log("You pressed alphabet key")
	}
	else {
	console.log("Please press a letter key only")
	}

// Comparing the user's guess to the letters contained in splitWord array (the picked word)
	for (var i = 0; i < splitWord.length; i++) {
		
		if ((prevGuess()) ==false && (lettersOnly()==true)){

			if ((userGuess == splitWord[i])) {
			// console.log ("You guessed " + userGuess);
			alreadyGuessed.push(userGuess);
		}
		else if ((userGuess == splitWord[i]) && (prevGuess()==true) && (lettersOnly()==true)) {
			console.log("keep going");
		}


		else if ((userGuess != splitWord[i])) {
			// console.log("Wrong guess.")
			guessNumber--;
			alreadyGuessed.push(userGuess);
		}

		else if ((prevGuess() == true) || (lettersOnly()==false)) { 
			console.log("Keep guessing");
		}

		else {
			// return false;
			console.log("not sure what to do")
			}	
	}
};

// Get the "_" to change back to the letter guessed
		for (var i = 0; i < splitWord.length; i++) {
			if (splitWord[i] == userGuess) {
				placeholder[i]=placeholder[i].replace(' _', userGuess);
				console.log(placeholder[i]);
			}
		}


// Check if user won or loss
correctLetters = 0;
for (var i = 0; i < splitWord.length; i++) {

		if ((splitWord[i] == placeholder[i])){
			correctLetters++;
			console.log("correct letters value: " + correctLetters);
			
			if ((totalLetters == correctLetters) && (guessNumber > 0)) {
				console.log("Congratulations!")
				win++;
				initializeGame();
			}

		} else if ((totalLetters !== correctLetters) && (guessNumber <= 0)) {
			console.log("You lose")
			lose++;
			initializeGame();
		// } else {
		// 	lose++;
		// 	initializeGame();
		}
};

// Create the HTML that will be injected into <span> and displayed on the page.

  // Display the word placeholder on our page.
	    var currentWord = "<p>" + placeholder.join('') + "</p>";
	    document.querySelector("#wordPlaceholder").innerHTML = currentWord;

  // Display Wins value on page
	    var winner = win;
		document.querySelector("#wins").innerHTML = win;

  // Display Loses value on page
	    var loss = lose;
		document.querySelector("#losses").innerHTML = lose;

  // Display Guesses Remaining value on page
	    var guess = guessNumber;
		document.querySelector("#guessRemain").innerHTML = guess;

  // Display the Letters Already Guessed on page
	    var guessedLetters = alreadyGuessed.toString();
		document.querySelector("#guessLetter").innerHTML = guessedLetters;

}; //<--ending keyup function curly brace
