function process()
{
	'use strict';

	//references for html elements
	var start = document.getElementById('start');
	var end = document.getElementById('end');
	var output = document.getElementById('output');

	//declared variables for the output
	var message = '';
	var interval = '';
	var day = 1000 * 60 * 24;

	//new date objects
	var startDate = new Date(start.value);
	var endDate = new Date(end.value);

	//confirm dates are valid
	if ( startDate.getTime() && endDate.getTime() ) 
	{
		//make sure the start date comes first
		if (startDate < endDate)
		{
			//determine the intereval between the two dates
			var diff = endDate - startDate;
			if(diff <= day)
			{
				interval = '1 day'; 
			} else {
				interval = Math.round(diff/day) + ' days';
			}
			
			//genereate message to be displayed
			message = 'The event has been scheduled starting on ' + startDate.toLocaleDateString();
			message += ' and ending on ' + endDate.toLocaleDateString();
			message += ', which is a period of ' + interval + '.';
		} else {
			//create error messages
			message = 'The start date must come before the end date!';
		}
	} else {
		message = 'Please enter valid start and end dates in the format MM/DD/YYYY.';
	}

		//update custom message
	if (output.textContent !== undefined)
	{
		output.textContent = message;
	} else {
		output.innerText = message;
	}

	return false;
}

function init()
{
	'use strict';
	document.getElementById('theForm').onsubmit = process;
} 

window.onload = init;