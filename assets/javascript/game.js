
//CREATE ARRAY FOR HANGMAN WORD CHOICES 

var theWord = ["cello","strings","classical","violin","instrument","conductor","symphony","bass","viola","allegro"];

//Randomly choose a word for the user to guess
for (var i = 0; i < theWord.length; i++) {
	
	    var index = Math.floor(Math.random()*theWord.length);
	    var pickedWord = theWord[index];
	    theWord.splice(index, 1);  // This removes the picked element from the array

		//Generate placeholder text for the word the computer chooses
		var placeholder = pickedWord.replace(/[a-z]/g, " _ ");


	    // Here we create the HTML that will be injected into our div and displayed on the page.
	    var html = "<p>Current Word: " + placeholder + "</p>";

	    // Injecting the HTML we just created into our div and updating the word placeholder on our page.
	    document.querySelector("#wordPlaceholder").innerHTML = html;

}; //<--ending for-loop curly brace