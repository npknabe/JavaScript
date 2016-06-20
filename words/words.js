//used to get references to form elements
function $(id)
{
	'use strict';

	if (typeof id != 'undefined')
	{
		return document.getElementById(id);
	}
}

function setText(elementId, message)
{
	'use strict';

	if( (typeof elementId == 'string') && (typeof message == 'string') )
	{
		var output = $(elementId);
		if (output.textContent !== undefined)
		{
			output.textContent = message;
		} else {
			output.innerText = message;
		}
	}
}

function sortWords(max)
{
	'use strict';

	var words = $('words').value;

	//convert string to an array
	words = words.split(' ');

	//sort the words (case insensitive)
	var sorted = words.map(function(value)
	{
		return value.toLowerCase();
	}).sort();

	//output
	setText('output' , sorted.join(', '));

	return false;
}

//event listener
function init()
{
	'use strict';

	$('theForm').onsubmit = sortWords;
}

window.onload = init;