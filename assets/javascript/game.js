
//CREATE ARRAY FOR HANGMAN WORD CHOICES 

var theWord = ["cello", "strings", "classical", "violin", "instrument", "conductor", "symphony", "bass", "viola", "allegro"];

var imgArray = [ 
    'assets/images/cello.jpg',
    'assets/images/strings.jpg',
    'assets/images/classicalcomposers.jpg',
    'assets/images/violin.jpg',
    'assets/images/instruments.jpg',
    'assets/images/conductor.jpg',
    'assets/images/symphony.jpg',
    'assets/images/bass.jpg',
    'assets/images/viola.jpg',
    'assets/images/allegro.jpg',
];


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

// //Randomly choose a word for the user to guess
		pickedWord = theWord[Math.floor(Math.random()*theWord.length)];
		//console.log("pickedWord is " + pickedWord + ", index position " + theWord.indexOf(pickedWord));
		theWord.splice(pickedWord, 0);  // This removes the picked element from the array

//Generate placeholder text for the word the computer chooses
		placeholder = pickedWord.split("");
		for (var i = 0; i < placeholder.length; i++) {
			placeholder[i] = " _";
		};	//PLACEHOLDER is "printed" to html at the end of this file 

//Creates array with the letters of the choosen word as my "answer" to compare letter guesses to.
	splitWord = pickedWord.split("");
	totalLetters = splitWord.length;	

}; //ending initialize() brace

// Check if user input is only alphabet keys
function lettersOnly() {
	var charCode = event.keyCode;
	if ((charCode > 64 && charCode < 91)) {
		return true;
	} else {
		alert("Please press a letter key only");
		return false;
	}
};

function prevGuess () {
var userGuess = event.key;
	if (alreadyGuessed.includes(userGuess)) { 
		console.log("You already guessed that letter!");
		return true;
	}
	else { 
		console.log("Unique guess.");
		return false;
	}
};

initializeGame();

// When the user presses a key, it will run the following functions...
document.onkeyup = function(event) {
userGuess = event.key;

// Check if the letter has already been used.
// Comparing the user's guess to the letters contained in splitWord array (the picked word)
		if ((prevGuess()===false) && (lettersOnly())) {

			if (splitWord.includes(userGuess)) {
			console.log ("You guessed the " + userGuess + " letter");
			alreadyGuessed.push(userGuess);
			}
			
			else if (splitWord != userGuess) {
			console.log("Wrong guess.");
			guessNumber--;
			alreadyGuessed.push(userGuess);
			}
		};

// Get the "_" to change back to the letter guessed
	for (var i = 0; i < splitWord.length; i++) {
		if (splitWord[i] == userGuess) {
			placeholder[i]=placeholder[i].replace(' _', userGuess);
			}
	};

// Check if user won or loss
	correctLetters = 0;
	for (var i = 0; i < splitWord.length; i++) {

		if ((splitWord[i] == placeholder[i])){
			correctLetters++;
			
			if ((totalLetters == correctLetters) && (guessNumber > 0)) {
				console.log("Congratulations!")
				win++;
				document.querySelector("#answer").innerHTML = "<p><strong>YES! The correct word was: " + pickedWord +"</strong></p>";
				document.querySelector("#imgPlaceholder").innerHTML = '<img src="' + imgArray[theWord.indexOf(pickedWord)] + '">'
				initializeGame();
			}

		} else if ((totalLetters !== correctLetters) && (guessNumber <= 0)) {
			console.log("You lose")
			lose++;
			document.querySelector("#answer").innerHTML = "<p><strong>Sorry! The correct word was: " + pickedWord +"</strong></p>";
			document.querySelector("#imgPlaceholder").innerHTML = '<img src="' + imgArray[theWord.indexOf(pickedWord)] + '">'
			initializeGame();
			}
	};

// CREATE THE HTML THAT WILL BE INJECTED INTO <DIV>s AND DISPLAYED ON THE PAGE.

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

}; //ENDING KEYUP BRACE