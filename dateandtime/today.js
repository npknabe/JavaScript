function init()
{
	'use strict';

	var today = new Date();

	//message
	var message = 'Right now it is ' + today.toLocaleDateString();
	message += ' at ' + today.getHours() + ':' +today.getMinutes();

	//output
	var output = document.getElementById('output');

	//update custom message
	if (output.textContent !== undefined)
	{
		output.textContent = message;
	} else {
		output.innerText = message;
	}
}

window.onload = init;