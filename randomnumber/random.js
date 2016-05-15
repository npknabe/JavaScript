function showNumbers()
{
	'use strict';
	var numbers = '';

	// make the random numbers
	for (var i = 0; i < 6; i++)
	{
		numbers += parseInt((Math.random() * 100), 10) + ' ';
	}

	//display the numbers to the page
	var output = document.getElementById('output');
	if (output.textContent !== undefined) 
	{	
		output.textContent = numbers;
	} else {
		output.innerText = numbers;
	}
}

//event listener
window.onload = showNumbers;