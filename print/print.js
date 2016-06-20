window.onload = function()
{
	'use strict';

	//check for print capability
	if (typeof window.print == 'function')
	{
		//create button element
		var printButton = document.createElement('button');

		//give button visible text
		if (printButton.textcontent != 'undefined')
		{
			printButton.textContent = 'Print';
		} else {
			printButton.innerText = 'Print';
		}

		//event handler
		printButton.onclick = function()
		{
			window.print();
		};

		//anonymous function to add print button
		document.body.insertBefore(printButton, document.getElementById('main'));
	}
};