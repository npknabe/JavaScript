function formatNames()
{
	'use strict';
	var formattedName;

	//retrieve users first and last names
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	
	//formatted name creation
	formattedName = lastName + ', ' + firstName;

	//display formatted name
	document.getElementById('result').value = formattedName;

	return false;
}

//event listener
function init() 
{
	'use strict';
	document.getElementById('theForm').onsubmit = formatNames;
}

window.onload = init;