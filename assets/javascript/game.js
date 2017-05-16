
//CREATE ARRAY FOR HANGMAN WORD CHOICES 

var theWord = ["cello","strings","classical","violin","instrument","conductor","symphony","bass","viola","allegro"];

//Set inital valus for win, loss, and number of guesses
var win = 0;
var lose = 0;
var guessNumber = 10;
var alreadyGuessed = [];

	//Randomly choose a word for the user to guess
	for (var i = 0; i < theWord.length; i++) {
	
	    var index = Math.floor(Math.random()*theWord.length);
	    var pickedWord = theWord[index];
	    theWord.splice(index, 1);  // This removes the picked element from the array

		//Generate placeholder text for the word the computer chooses
		// var placeholder = pickedWord.replace(/[a-z]/g, " _ ");
				var placeholder = pickedWord.split("");
				for (var i = 0; i < placeholder.length; i++) {
					placeholder[i] = " _";
					console.log (placeholder[i]);
				} 

	    
	}; //<--ending for-loop curly brace

//Creates array with the letters of the choosen word
var splitWord = pickedWord.split("");
console.log(splitWord);

var totalLetters = splitWord.length;


// Check if user input is only alphabet keys
function lettersOnly() {
            var charCode = event.keyCode;
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
                return true;
            else
                return false;
}

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {

// Determine which key was pressed
var userGuess = event.key;

// Check if the letter has already been used
		//Tried with regular expression [/a-z/gi] but didn't work

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

// NOT WORKING 
// if (prevGuess() == true) {
// 		console.log ("alreadyGuessed array contains: " + alreadyGuessed);
// 		return true;
// 	} 
// 	else {
// 		console.log ("alreadyGuessed array is empty");
// 		return false;
// }



// Comparing the user's guess to the letters contained in splitWord array (the picked word)
if (prevGuess() ==false){

	if ((userGuess == "a")  && (splitWord.includes(userGuess))){
	console.log ("You guessed " + userGuess);
	guessNumber--;
	alreadyGuessed.push(userGuess);
		//CHANGE "_" IN PICKED WORD TO AN "A"
	}

	else if ((userGuess == "b")  && (splitWord.includes(userGuess))) {
	console.log ("You guessed " + userGuess);
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
	
	else if ((userGuess == "c")  && (splitWord.includes(userGuess))){
	console.log ("You guessed " + userGuess);
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
	else if ((userGuess == "d")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
	else if ((userGuess == "e")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
	else if ((userGuess == "f")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
	else if ((userGuess == "g")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "h")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "i")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "j")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "k")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "l")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "m")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "n")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "o")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "p")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "q")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "r")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "s")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "t")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "u")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "v")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "w")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "x")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "y")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}
		else if ((userGuess == "z")  && (splitWord.includes(userGuess))){
	guessNumber--;
	alreadyGuessed.push(userGuess);
	}

	else if ((splitWord.includes(userGuess) == false)) {
		console.log("Wrong guess.")
		guessNumber--;
		alreadyGuessed.push(userGuess);
	}
	else if ((prevGuess() == true)) { 
		console.log("Keep guessing");
	}

	// Get the "_" to change back to the letter guessed
		for (var i = 0; i < splitWord.length; i++) {
			if (splitWord[i] == userGuess) {
				placeholder[i]=placeholder[i].replace(' _', userGuess);
				console.log(placeholder[i]);
			}
		}

// Check if user won
// suddenly increments win at the 3rd CORRECT key stroke??
var correctLetters = 0;

	for (var i = 0; i < splitWord.length; i++) {

		if ((splitWord[i] == placeholder[i])){
			correctLetters++;
			console.log("correct letters value: " + correctLetters);
			if (totalLetters == correctLetters) {
			console.log("Congratulations!")
			win++;
			//NEED TO AUTOMATICALLY RESET GAME AND PICK NEW WORD
			// guessNumber = 0;
			// PICK NEW WORD
		}
		}
	}

}

// Here we create the HTML that will be injected into our div and displayed on the page.
	    var currentWord = "<p>" + placeholder + "</p>";

	    // Injecting the HTML we just created into our div and updating the word placeholder on our page.
	    document.querySelector("#wordPlaceholder").innerHTML = currentWord;

		// Display Wins value on page
	    var winner = win;
		document.querySelector("#wins").innerHTML = winner;

		// Display Loses value on page
	    var loss = lose;
		document.querySelector("#losses").innerHTML = loss;

		// Display Guesses Remaining value on page
	    var guess = guessNumber;
		document.querySelector("#guessRemain").innerHTML = guess;

		// Display the Letters Already Guessed on page
	    var guessedLetters = alreadyGuessed.toString();
		document.querySelector("#guessLetter").innerHTML = guessedLetters;

}; //<--ending keyup function curly brace
