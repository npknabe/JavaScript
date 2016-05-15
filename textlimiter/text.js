function limitText() {
	'use strict';

	var limitedText;

	// retrive original text
	var originalText = document.getElementById('comments').value;

	//find the last space before the one-hundreth character in the original text
	var lastSpace = originalText.lastIndexOf(' ', 100);

	//trim the text to the spot:
	limitedText = originalText.slice(0, lastSpace);

	//show the user the number of characters submitted
	document.getElementById('count').value = originalText.length;

	//display the limited text
	document.getElementById('result').value = limitedText;

	//complete the function
	return false;
}

//add an event listener

function init() {
	'use strict';

	document.getElementById('theForm').onsubmit = limitText;
}

window.onload = init;