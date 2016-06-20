function limitText()
{
	'use strict';

	//Get teh textareas value and report how many characters it has
	var comments = U.$('comments');
	var count = comments.value.length;
	U.$('count').value = count;

	//cut down the textareas value to 100 characters
	if (count > 100)
	{
		comments.value = comments.value.slice(0,100);
	}
}

//event listener
window.onload = function()
{
	'use strict'
	U.addEvent(U.$('comments'), 'keyup', limitText);
}