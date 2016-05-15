function process() 
{
	'use strict';
	var okay = true;

	//get reference from two form elements
	var email = document.getElementById('email');
	var comments = document.getElementById('comments');

	//validate email
	if (!email || !email.value
		|| (email.value.length < 6)
		|| (email.value.indexOf('@') == -1))
		{
			okay = false;
			alert('Please enter a valid email address!');
		}

	//validate comments
	if (!comments || !comments.value
		|| (comments.value.indexOf('<') != -1)
		{
			okay = false;
			alert('Please enteryour comments, without any HTML!');
		}

		return okay;
}

function init() 
{
	'use strict';
	document.getElementById('theForm').onsubmit = process;
}

window.onload = init;